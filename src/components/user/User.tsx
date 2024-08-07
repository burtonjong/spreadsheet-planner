"use client";

import { generateClient } from "aws-amplify/api";
import { useState } from "react";

import type { Schema } from "@/../amplify/data/resource";
import { Button } from "@aws-amplify/ui-react";
import { StorageImage, StorageManager } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import { useQuery } from "@tanstack/react-query";

import { useUser } from "../contexts/UserContext";

const client = generateClient<Schema>();

export default function UserProfile() {
  const [image, setImage] = useState(false);

  const user = useUser().data;

  const { isFetching, data } = useQuery({
    queryKey: ["user", user.username],
    queryFn: async () => {
      return (await client.models.User.get({ id: user.username as string }))
        .data;
    },
  });

  const imagePath = `public/${data?.firstName}${data?.lastName}/profile.png`;

  const imageUploadPath = `public/${data?.firstName}${data?.lastName}/`;

  const processFile = async ({ file }: { file: File }) => {
    return { file, key: `profile.png` };
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="">
            <h1>
              Hi, {data?.firstName} {data?.lastName}
            </h1>
            {data?.id && imagePath && (
              <div className="size-64">
                <StorageImage
                  alt="profile"
                  path={imagePath}
                  fallbackSrc="public/cat.png"
                />
              </div>
            )}
          </div>

          {image ? (
            <>
              <Button
                variation="primary"
                size="small"
                loadingText=""
                onClick={() => setImage(!image)}
              >
                Cancel
              </Button>
              <StorageManager
                acceptedFileTypes={["image/*"]}
                path={imageUploadPath}
                maxFileCount={1}
                processFile={processFile}
                isResumable
                autoUpload={false}
              />
            </>
          ) : (
            <>
              <Button
                variation="primary"
                size="small"
                loadingText=""
                onClick={() => setImage(!image)}
              >
                Edit
              </Button>
            </>
          )}
          <div className="flex flex-col gap-2">
            <p>Email: {data?.email}</p>
            <p>Total Earnings: {data?.totalEarnings}</p>
            <p>Total Sessions Attended: {data?.sessionsAttended.length}</p>
          </div>
        </>
      )}
    </div>
  );
}
