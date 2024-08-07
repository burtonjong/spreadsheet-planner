/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type SessionAttended = {
  __typename: "SessionAttended";
  createdAt: string;
  date: string;
  earningsThatSession?: number | null;
  id: string;
  sessionAttendedId: string;
  updatedAt: string;
  user?: User | null;
};

export type User = {
  __typename: "User";
  completedRegistration?: boolean | null;
  createdAt: string;
  email?: string | null;
  firstName?: string | null;
  id: string;
  lastName?: string | null;
  numberSessionsAttended?: number | null;
  profileOwner?: string | null;
  role?: string | null;
  sessionsAttended?: ModelSessionAttendedConnection | null;
  totalEarnings?: number | null;
  updatedAt: string;
};

export type ModelSessionAttendedConnection = {
  __typename: "ModelSessionAttendedConnection";
  items: Array<SessionAttended | null>;
  nextToken?: string | null;
};

export type Timer = {
  __typename: "Timer";
  createdAt: string;
  id: string;
  nextSessionDate?: string | null;
  nextSessionTime?: string | null;
  updatedAt: string;
};

export type ModelSessionAttendedFilterInput = {
  and?: Array<ModelSessionAttendedFilterInput | null> | null;
  createdAt?: ModelStringInput | null;
  date?: ModelStringInput | null;
  earningsThatSession?: ModelFloatInput | null;
  id?: ModelIDInput | null;
  not?: ModelSessionAttendedFilterInput | null;
  or?: Array<ModelSessionAttendedFilterInput | null> | null;
  sessionAttendedId?: ModelIDInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelStringInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}

export type ModelSizeInput = {
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
};

export type ModelFloatInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
};

export type ModelIDInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  size?: ModelSizeInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type ModelTimerFilterInput = {
  and?: Array<ModelTimerFilterInput | null> | null;
  createdAt?: ModelStringInput | null;
  id?: ModelIDInput | null;
  nextSessionDate?: ModelStringInput | null;
  nextSessionTime?: ModelStringInput | null;
  not?: ModelTimerFilterInput | null;
  or?: Array<ModelTimerFilterInput | null> | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelTimerConnection = {
  __typename: "ModelTimerConnection";
  items: Array<Timer | null>;
  nextToken?: string | null;
};

export type ModelUserFilterInput = {
  and?: Array<ModelUserFilterInput | null> | null;
  completedRegistration?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  email?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  id?: ModelIDInput | null;
  lastName?: ModelStringInput | null;
  not?: ModelUserFilterInput | null;
  numberSessionsAttended?: ModelIntInput | null;
  or?: Array<ModelUserFilterInput | null> | null;
  profileOwner?: ModelStringInput | null;
  role?: ModelStringInput | null;
  totalEarnings?: ModelFloatInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  eq?: boolean | null;
  ne?: boolean | null;
};

export type ModelIntInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelSessionAttendedConditionInput = {
  and?: Array<ModelSessionAttendedConditionInput | null> | null;
  createdAt?: ModelStringInput | null;
  date?: ModelStringInput | null;
  earningsThatSession?: ModelFloatInput | null;
  not?: ModelSessionAttendedConditionInput | null;
  or?: Array<ModelSessionAttendedConditionInput | null> | null;
  sessionAttendedId?: ModelIDInput | null;
  updatedAt?: ModelStringInput | null;
};

export type CreateSessionAttendedInput = {
  date: string;
  earningsThatSession?: number | null;
  id?: string | null;
  sessionAttendedId: string;
};

export type ModelTimerConditionInput = {
  and?: Array<ModelTimerConditionInput | null> | null;
  createdAt?: ModelStringInput | null;
  nextSessionDate?: ModelStringInput | null;
  nextSessionTime?: ModelStringInput | null;
  not?: ModelTimerConditionInput | null;
  or?: Array<ModelTimerConditionInput | null> | null;
  updatedAt?: ModelStringInput | null;
};

export type CreateTimerInput = {
  id?: string | null;
  nextSessionDate?: string | null;
  nextSessionTime?: string | null;
};

export type ModelUserConditionInput = {
  and?: Array<ModelUserConditionInput | null> | null;
  completedRegistration?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  email?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  not?: ModelUserConditionInput | null;
  numberSessionsAttended?: ModelIntInput | null;
  or?: Array<ModelUserConditionInput | null> | null;
  profileOwner?: ModelStringInput | null;
  role?: ModelStringInput | null;
  totalEarnings?: ModelFloatInput | null;
  updatedAt?: ModelStringInput | null;
};

export type CreateUserInput = {
  completedRegistration?: boolean | null;
  email?: string | null;
  firstName?: string | null;
  id?: string | null;
  lastName?: string | null;
  numberSessionsAttended?: number | null;
  profileOwner?: string | null;
  role?: string | null;
  totalEarnings?: number | null;
};

export type DeleteSessionAttendedInput = {
  id: string;
};

export type DeleteTimerInput = {
  id: string;
};

export type DeleteUserInput = {
  id: string;
};

export type UpdateSessionAttendedInput = {
  date?: string | null;
  earningsThatSession?: number | null;
  id: string;
  sessionAttendedId?: string | null;
};

export type UpdateTimerInput = {
  id: string;
  nextSessionDate?: string | null;
  nextSessionTime?: string | null;
};

export type UpdateUserInput = {
  completedRegistration?: boolean | null;
  email?: string | null;
  firstName?: string | null;
  id: string;
  lastName?: string | null;
  numberSessionsAttended?: number | null;
  profileOwner?: string | null;
  role?: string | null;
  totalEarnings?: number | null;
};

export type ModelSubscriptionSessionAttendedFilterInput = {
  and?: Array<ModelSubscriptionSessionAttendedFilterInput | null> | null;
  createdAt?: ModelSubscriptionStringInput | null;
  date?: ModelSubscriptionStringInput | null;
  earningsThatSession?: ModelSubscriptionFloatInput | null;
  id?: ModelSubscriptionIDInput | null;
  or?: Array<ModelSubscriptionSessionAttendedFilterInput | null> | null;
  sessionAttendedId?: ModelSubscriptionIDInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  in?: Array<string | null> | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionFloatInput = {
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  in?: Array<number | null> | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  in?: Array<string | null> | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionTimerFilterInput = {
  and?: Array<ModelSubscriptionTimerFilterInput | null> | null;
  createdAt?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionIDInput | null;
  nextSessionDate?: ModelSubscriptionStringInput | null;
  nextSessionTime?: ModelSubscriptionStringInput | null;
  or?: Array<ModelSubscriptionTimerFilterInput | null> | null;
  updatedAt?: ModelSubscriptionStringInput | null;
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  completedRegistration?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionIDInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  numberSessionsAttended?: ModelSubscriptionIntInput | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
  profileOwner?: ModelStringInput | null;
  role?: ModelSubscriptionStringInput | null;
  totalEarnings?: ModelSubscriptionFloatInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null;
  ne?: boolean | null;
};

export type ModelSubscriptionIntInput = {
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  in?: Array<number | null> | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
  notIn?: Array<number | null> | null;
};

export type GetSessionAttendedQueryVariables = {
  id: string;
};

export type GetSessionAttendedQuery = {
  getSessionAttended?: {
    __typename: "SessionAttended";
    createdAt: string;
    date: string;
    earningsThatSession?: number | null;
    id: string;
    sessionAttendedId: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      completedRegistration?: boolean | null;
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id: string;
      lastName?: string | null;
      numberSessionsAttended?: number | null;
      profileOwner?: string | null;
      role?: string | null;
      totalEarnings?: number | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type GetTimerQueryVariables = {
  id: string;
};

export type GetTimerQuery = {
  getTimer?: {
    __typename: "Timer";
    createdAt: string;
    id: string;
    nextSessionDate?: string | null;
    nextSessionTime?: string | null;
    updatedAt: string;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: "User";
    completedRegistration?: boolean | null;
    createdAt: string;
    email?: string | null;
    firstName?: string | null;
    id: string;
    lastName?: string | null;
    numberSessionsAttended?: number | null;
    profileOwner?: string | null;
    role?: string | null;
    sessionsAttended?: {
      __typename: "ModelSessionAttendedConnection";
      nextToken?: string | null;
    } | null;
    totalEarnings?: number | null;
    updatedAt: string;
  } | null;
};

export type ListSessionAttendedsQueryVariables = {
  filter?: ModelSessionAttendedFilterInput | null;
  id?: string | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListSessionAttendedsQuery = {
  listSessionAttendeds?: {
    __typename: "ModelSessionAttendedConnection";
    items: Array<{
      __typename: "SessionAttended";
      createdAt: string;
      date: string;
      earningsThatSession?: number | null;
      id: string;
      sessionAttendedId: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListTimersQueryVariables = {
  filter?: ModelTimerFilterInput | null;
  id?: string | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListTimersQuery = {
  listTimers?: {
    __typename: "ModelTimerConnection";
    items: Array<{
      __typename: "Timer";
      createdAt: string;
      id: string;
      nextSessionDate?: string | null;
      nextSessionTime?: string | null;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  id?: string | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      completedRegistration?: boolean | null;
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id: string;
      lastName?: string | null;
      numberSessionsAttended?: number | null;
      profileOwner?: string | null;
      role?: string | null;
      totalEarnings?: number | null;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type CreateSessionAttendedMutationVariables = {
  condition?: ModelSessionAttendedConditionInput | null;
  input: CreateSessionAttendedInput;
};

export type CreateSessionAttendedMutation = {
  createSessionAttended?: {
    __typename: "SessionAttended";
    createdAt: string;
    date: string;
    earningsThatSession?: number | null;
    id: string;
    sessionAttendedId: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      completedRegistration?: boolean | null;
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id: string;
      lastName?: string | null;
      numberSessionsAttended?: number | null;
      profileOwner?: string | null;
      role?: string | null;
      totalEarnings?: number | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type CreateTimerMutationVariables = {
  condition?: ModelTimerConditionInput | null;
  input: CreateTimerInput;
};

export type CreateTimerMutation = {
  createTimer?: {
    __typename: "Timer";
    createdAt: string;
    id: string;
    nextSessionDate?: string | null;
    nextSessionTime?: string | null;
    updatedAt: string;
  } | null;
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null;
  input: CreateUserInput;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: "User";
    completedRegistration?: boolean | null;
    createdAt: string;
    email?: string | null;
    firstName?: string | null;
    id: string;
    lastName?: string | null;
    numberSessionsAttended?: number | null;
    profileOwner?: string | null;
    role?: string | null;
    sessionsAttended?: {
      __typename: "ModelSessionAttendedConnection";
      nextToken?: string | null;
    } | null;
    totalEarnings?: number | null;
    updatedAt: string;
  } | null;
};

export type DeleteSessionAttendedMutationVariables = {
  condition?: ModelSessionAttendedConditionInput | null;
  input: DeleteSessionAttendedInput;
};

export type DeleteSessionAttendedMutation = {
  deleteSessionAttended?: {
    __typename: "SessionAttended";
    createdAt: string;
    date: string;
    earningsThatSession?: number | null;
    id: string;
    sessionAttendedId: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      completedRegistration?: boolean | null;
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id: string;
      lastName?: string | null;
      numberSessionsAttended?: number | null;
      profileOwner?: string | null;
      role?: string | null;
      totalEarnings?: number | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type DeleteTimerMutationVariables = {
  condition?: ModelTimerConditionInput | null;
  input: DeleteTimerInput;
};

export type DeleteTimerMutation = {
  deleteTimer?: {
    __typename: "Timer";
    createdAt: string;
    id: string;
    nextSessionDate?: string | null;
    nextSessionTime?: string | null;
    updatedAt: string;
  } | null;
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null;
  input: DeleteUserInput;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: "User";
    completedRegistration?: boolean | null;
    createdAt: string;
    email?: string | null;
    firstName?: string | null;
    id: string;
    lastName?: string | null;
    numberSessionsAttended?: number | null;
    profileOwner?: string | null;
    role?: string | null;
    sessionsAttended?: {
      __typename: "ModelSessionAttendedConnection";
      nextToken?: string | null;
    } | null;
    totalEarnings?: number | null;
    updatedAt: string;
  } | null;
};

export type UpdateSessionAttendedMutationVariables = {
  condition?: ModelSessionAttendedConditionInput | null;
  input: UpdateSessionAttendedInput;
};

export type UpdateSessionAttendedMutation = {
  updateSessionAttended?: {
    __typename: "SessionAttended";
    createdAt: string;
    date: string;
    earningsThatSession?: number | null;
    id: string;
    sessionAttendedId: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      completedRegistration?: boolean | null;
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id: string;
      lastName?: string | null;
      numberSessionsAttended?: number | null;
      profileOwner?: string | null;
      role?: string | null;
      totalEarnings?: number | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type UpdateTimerMutationVariables = {
  condition?: ModelTimerConditionInput | null;
  input: UpdateTimerInput;
};

export type UpdateTimerMutation = {
  updateTimer?: {
    __typename: "Timer";
    createdAt: string;
    id: string;
    nextSessionDate?: string | null;
    nextSessionTime?: string | null;
    updatedAt: string;
  } | null;
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null;
  input: UpdateUserInput;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: "User";
    completedRegistration?: boolean | null;
    createdAt: string;
    email?: string | null;
    firstName?: string | null;
    id: string;
    lastName?: string | null;
    numberSessionsAttended?: number | null;
    profileOwner?: string | null;
    role?: string | null;
    sessionsAttended?: {
      __typename: "ModelSessionAttendedConnection";
      nextToken?: string | null;
    } | null;
    totalEarnings?: number | null;
    updatedAt: string;
  } | null;
};

export type OnCreateSessionAttendedSubscriptionVariables = {
  filter?: ModelSubscriptionSessionAttendedFilterInput | null;
};

export type OnCreateSessionAttendedSubscription = {
  onCreateSessionAttended?: {
    __typename: "SessionAttended";
    createdAt: string;
    date: string;
    earningsThatSession?: number | null;
    id: string;
    sessionAttendedId: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      completedRegistration?: boolean | null;
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id: string;
      lastName?: string | null;
      numberSessionsAttended?: number | null;
      profileOwner?: string | null;
      role?: string | null;
      totalEarnings?: number | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type OnCreateTimerSubscriptionVariables = {
  filter?: ModelSubscriptionTimerFilterInput | null;
};

export type OnCreateTimerSubscription = {
  onCreateTimer?: {
    __typename: "Timer";
    createdAt: string;
    id: string;
    nextSessionDate?: string | null;
    nextSessionTime?: string | null;
    updatedAt: string;
  } | null;
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  profileOwner?: string | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: "User";
    completedRegistration?: boolean | null;
    createdAt: string;
    email?: string | null;
    firstName?: string | null;
    id: string;
    lastName?: string | null;
    numberSessionsAttended?: number | null;
    profileOwner?: string | null;
    role?: string | null;
    sessionsAttended?: {
      __typename: "ModelSessionAttendedConnection";
      nextToken?: string | null;
    } | null;
    totalEarnings?: number | null;
    updatedAt: string;
  } | null;
};

export type OnDeleteSessionAttendedSubscriptionVariables = {
  filter?: ModelSubscriptionSessionAttendedFilterInput | null;
};

export type OnDeleteSessionAttendedSubscription = {
  onDeleteSessionAttended?: {
    __typename: "SessionAttended";
    createdAt: string;
    date: string;
    earningsThatSession?: number | null;
    id: string;
    sessionAttendedId: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      completedRegistration?: boolean | null;
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id: string;
      lastName?: string | null;
      numberSessionsAttended?: number | null;
      profileOwner?: string | null;
      role?: string | null;
      totalEarnings?: number | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type OnDeleteTimerSubscriptionVariables = {
  filter?: ModelSubscriptionTimerFilterInput | null;
};

export type OnDeleteTimerSubscription = {
  onDeleteTimer?: {
    __typename: "Timer";
    createdAt: string;
    id: string;
    nextSessionDate?: string | null;
    nextSessionTime?: string | null;
    updatedAt: string;
  } | null;
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  profileOwner?: string | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: "User";
    completedRegistration?: boolean | null;
    createdAt: string;
    email?: string | null;
    firstName?: string | null;
    id: string;
    lastName?: string | null;
    numberSessionsAttended?: number | null;
    profileOwner?: string | null;
    role?: string | null;
    sessionsAttended?: {
      __typename: "ModelSessionAttendedConnection";
      nextToken?: string | null;
    } | null;
    totalEarnings?: number | null;
    updatedAt: string;
  } | null;
};

export type OnUpdateSessionAttendedSubscriptionVariables = {
  filter?: ModelSubscriptionSessionAttendedFilterInput | null;
};

export type OnUpdateSessionAttendedSubscription = {
  onUpdateSessionAttended?: {
    __typename: "SessionAttended";
    createdAt: string;
    date: string;
    earningsThatSession?: number | null;
    id: string;
    sessionAttendedId: string;
    updatedAt: string;
    user?: {
      __typename: "User";
      completedRegistration?: boolean | null;
      createdAt: string;
      email?: string | null;
      firstName?: string | null;
      id: string;
      lastName?: string | null;
      numberSessionsAttended?: number | null;
      profileOwner?: string | null;
      role?: string | null;
      totalEarnings?: number | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type OnUpdateTimerSubscriptionVariables = {
  filter?: ModelSubscriptionTimerFilterInput | null;
};

export type OnUpdateTimerSubscription = {
  onUpdateTimer?: {
    __typename: "Timer";
    createdAt: string;
    id: string;
    nextSessionDate?: string | null;
    nextSessionTime?: string | null;
    updatedAt: string;
  } | null;
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  profileOwner?: string | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: "User";
    completedRegistration?: boolean | null;
    createdAt: string;
    email?: string | null;
    firstName?: string | null;
    id: string;
    lastName?: string | null;
    numberSessionsAttended?: number | null;
    profileOwner?: string | null;
    role?: string | null;
    sessionsAttended?: {
      __typename: "ModelSessionAttendedConnection";
      nextToken?: string | null;
    } | null;
    totalEarnings?: number | null;
    updatedAt: string;
  } | null;
};
