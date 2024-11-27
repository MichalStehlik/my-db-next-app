import styles from "./page.module.css";
import prisma from "../lib/prisma";
import { User } from "@prisma/client";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div className={styles.page}>
      <h1>Users</h1>
      {users.map((user: User) => (
        <div key={user.id}>-- {user.email}</div>
      ))}
    </div>
  );
}
