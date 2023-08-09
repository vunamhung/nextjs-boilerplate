interface User {
  id: number;
  username: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
  active: boolean;
  accessTokenResetAt: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  failedLoginCount: number;
}

interface Users {
  totalElements: number;
  totalPages: number;
  size: number;
  content: User[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}
