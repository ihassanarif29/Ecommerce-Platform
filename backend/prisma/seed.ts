import {
  PrismaClient,
  UserRole,
  ProductStatus,
} from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import * as bcrypt from "bcrypt";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const adminPasswordHash = await bcrypt.hash("Admin@12345", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@store.com" },
    update: {},
    create: {
      email: "admin@store.com",
      passwordHash: adminPasswordHash,
      firstName: "Store",
      lastName: "Admin",
      role: UserRole.ADMIN,
      emailVerified: true,
    },
  });

  const customerPasswordHash = await bcrypt.hash("Customer@12345", 10);
  await prisma.user.upsert({
    where: { email: "customer@store.com" },
    update: {},
    create: {
      email: "customer@store.com",
      passwordHash: customerPasswordHash,
      firstName: "Demo",
      lastName: "Customer",
      role: UserRole.CUSTOMER,
      emailVerified: true,
    },
  });

  const electronics = await prisma.category.upsert({
    where: { slug: "electronics" },
    update: {},
    create: { name: "Electronics", slug: "electronics" },
  });

  const genericBrand = await prisma.brand.upsert({
    where: { slug: "generic" },
    update: {},
    create: { name: "Generic", slug: "generic" },
  });

  const product = await prisma.product.upsert({
    where: { slug: "wireless-headphones" },
    update: {},
    create: {
      name: "Wireless Headphones",
      slug: "wireless-headphones",
      description:
        "Comfortable over-ear wireless headphones with noise cancellation.",
      shortDescription: "Noise-cancelling wireless headphones",
      sku: "WH-1000",
      price: 99.99,
      compareAtPrice: 129.99,
      status: ProductStatus.ACTIVE,
      brandId: genericBrand.id,
      categories: { create: [{ categoryId: electronics.id }] },
      inventory: { create: { quantity: 50 } },
    },
  });

  console.log({ admin: admin.email, product: product.name });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
