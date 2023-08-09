export const config = {
  app: {
    name: 'Mustafa',
  },
  menu: [
    {
      label: 'reservations',
      path: '/reservations',
      permission: 'OPERATION_RESERVATION',
      links: [
        {
          label: 'reservations',
          path: '/reservations',
          permission: 'OPERATION_RESERVATION',
        },
        {
          label: 'entryLogs',
          path: `/entry-logs`,
          permission: 'OPERATION_ENTRANCE',
        },
        {
          label: 'members',
          path: `/members`,
          permission: 'OPERATION_MEMBER',
        },
        {
          label: 'notifications',
          path: `/notifications`,
          permission: 'OPERATION_NOTIFICATION',
        },
      ],
    },
    {
      label: 'billingManagement',
      path: `/sales`,
      links: [
        {
          label: 'sales',
          path: `/sales`,
          permission: 'BILLING_SALE',
        },
        {
          label: 'billing',
          path: `/billing`,
          permission: 'BILLING_MONTHLY',
        },
      ],
    },
    {
      label: 'master',
      path: `/facilities`,
      links: [
        {
          label: 'facilities',
          path: `/facilities`,
          permission: 'MASTER_FACILITY',
        },
        {
          label: 'lessons',
          path: `/lessons`,
          permission: 'MASTER_STAFF',
        },
        {
          label: 'staffs',
          path: `/staffs`,
          permission: 'MASTER_LESSON',
        },
        {
          label: 'plans',
          path: `/plans`,
          permission: 'MASTER_PLAN',
        },
        {
          label: 'tags',
          path: `/tags`,
          permission: 'MASTER_TAG',
        },
        {
          label: 'priceRules',
          path: `/price-rules`,
          permission: 'MASTER_DISCOUNT',
        },
        {
          label: 'coupons',
          path: `/coupons`,
          permission: 'MASTER_COUPON',
        },
      ],
    },
    {
      label: 'system',
      path: `/admin-users`,
      links: [
        {
          label: 'adminUsers',
          path: `/admin-users`,
          permission: 'SYSTEM_ADMIN_USER',
        },
        {
          label: 'settings',
          path: `/settings`,
          permission: 'SYSTEM_SETTING',
        },
      ],
    },
  ],
};
