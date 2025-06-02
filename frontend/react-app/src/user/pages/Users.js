import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    //teste antes da implementação do backend
    {
      id: "u1",
      name: "João Fulano",
      image:
        "https://img.freepik.com/premium-photo/portrait-happy-young-man-ai-generated_804788-34413.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
