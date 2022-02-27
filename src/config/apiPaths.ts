export const apiPaths = {
  api: {
    healthCheck: '/api/health_check',

    v1: {
      auth: {
        index: '/api/v1/auth',
        signIn: '/api/v1/auth/sign_in',
        signOut: '/api/v1/auth/sign_out',
      },
    },
  },
} as const;
