root/
├── src/
│   ├── config/                            # App & environment configuration
│   │   ├── index.ts                       # Central config export
│   │   ├── env.ts                         # Load and validate .env variables
│   │   ├── logger.ts                      # Winston/Pino logger setup
│   │   └── ...                            # Any other configs (CORS, rate limit, etc.)
│   │
│   ├── constants/                         # App-wide constants
│   │   ├── index.ts
│   │   └── ...
│   │
│   ├── db/                                # Database setup
│   │   ├── schema/                        # Drizzle schema definitions
│   │   │   ├── tenant.schema.ts
│   │   │   ├── user.schema.ts
│   │   │   ├── product.schema.ts
│   │   │   └── order.schema.ts
│   │   ├── migrations/                    # Auto-generated migrations
│   │   ├── index.ts                       # Drizzle/Postgres connection
│   │   └── seed.ts                        # Seed initial data
│   │
│   ├── middlewares/                       # Express middlewares
│   │   ├── globalErrorHandler.ts          # Centralized error handling
│   │   ├── tenantResolver.ts              # Identify tenant from domain/header
│   │   ├── auth.middleware.ts             # JWT/session authentication
│   │   └── ...
│   │
│   ├── utils/                             # Utility functions
│   │   ├── datetime.ts                    # Date/time helpers
│   │   ├── apiResponse.ts                 # Standard API response format
│   │   ├── AppError.ts                    # Custom error class
│   │   └── bcrypt.ts                      # Password hashing utilities
│   │
│   ├── libs/                              # External integrations
│   │   ├── payment/                       # Stripe, SSLCommerz, etc.
│   │   ├── mailer/                        # Nodemailer, SendGrid, etc.
│   │   └── cache/                         # Redis or in-memory cache
│   │
│   ├── modules/                           # Feature modules (NestJS style)
│   │   ├── v1/                            # API Version 1
│   │   │   ├── users/
│   │   │   │   ├── user.routes.ts         # Express routers
│   │   │   │   ├── user.controller.ts     # HTTP request handlers
│   │   │   │   ├── user.service.ts        # Business logic
│   │   │   │   ├── user.repository.ts     # Database queries (Drizzle)
│   │   │   │   ├── user.validation.ts     # Request validation (Zod/Yup)
│   │   │   │   ├── user.interface.ts      # TypeScript interfaces/types
│   │   │   │   └── index.ts               # Module entry point (optional)
│   │   │   │
│   │   │   └── orders/
│   │   │       ├── order.routes.ts
│   │   │       ├── order.controller.ts
│   │   │       ├── order.service.ts
│   │   │       ├── order.repository.ts
│   │   │       ├── order.validation.ts
│   │   │       └── order.interface.ts
│   │   │
│   │   └── v2/                            # API Version 2
│   │       └── ... (same pattern as v1)
│   │
│   ├── routes/                            # API version entry points
│   │   ├── v1/index.ts                    # Combines all v1 module routes
│   │   ├── v2/index.ts                    # Combines all v2 module routes
│   │   └── index.ts                       # Decides which version to use
│   │
│   ├── tests/                             # Tests
│   │   ├── unit/                          # Unit tests for services/controllers
│   │   ├── integration/                   # API integration tests
│   │   └── e2e/                           # End-to-end tests (optional)
│   │
│   ├── types/                             # Global TS types
│   │   ├── express.d.ts                   # Express request type extensions
│   │   ├── tenant.d.ts
│   │   └── ...
│   │
│   ├── index.ts                           # Server entry (bootstraps app)
│   └── app.ts                             # Express app configuration
│
├── .env                                   # Environment variables
├── drizzle.config.ts                      # Drizzle ORM config
├── tsconfig