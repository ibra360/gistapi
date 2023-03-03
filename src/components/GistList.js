import React, { useEffect, useState } from "react";
import Spinner from "../utils/spinner/Spinner";
import { FlexDiv, Text } from "../utils/Styled";
import Gist from "./Gist";

const GistList = ({ users, loading }) => {
  // function to all gists
  const mappedUsers = () => {
    return users?.length
      ? users.map((item) => {
          return <Gist item={item} />;
        })
      : null;
  };

  return (
    <FlexDiv flexDirection="column">
      {!loading ? (
        <>
          <Text size="40px" fontWeight="bold" margin="20px 0px">
            {users?.length} Gists Found
          </Text>
          {mappedUsers()}
        </>
      ) : (
        <div className="pos-center">
          <Spinner />
        </div>
      )}
    </FlexDiv>
  );
};

export default React.memo(GistList);
