import React from 'react';

const Userlist = ({ Users }) => {
  return (
    <>
      {Users.map((Users) => (
        <tr>
          <td>{Users.name}</td>
          <td>{Users.username}</td>
          <td>{Users.email}</td>
          <td>{Users.phone}</td>
          <td>{Users.website}</td>
        </tr>
      ))}
    </>
  );
};

export default Userlist;
