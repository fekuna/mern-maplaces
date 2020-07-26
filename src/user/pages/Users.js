import React from "react";

import UserList from "../components/UserList";

const Users = (props) => {
  const USERS = [
    {
      id: "u1",
      name: "Alfan Almunawar",
      image:
        "https://vignette.wikia.nocookie.net/digimon/images/7/7f/Agumon_t.gif/revision/latest/scale-to-width-down/340?cb=20200405154705",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
