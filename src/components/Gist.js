import React from "react";
import { Text, WrapperDiv } from "../utils/Styled";
import { openFile, renderDate } from "./../utils/Methods";
import { FlexDiv } from "./../utils/Styled";

const Gist = ({ item }) => {
  
  // function to map files
  const filesData = () => {
    return (
      <FlexDiv justifyContent="left" margin="15px 0">
        {Object.keys(item?.files).map((oneKey, i) => {
          let fileData = item?.files[oneKey];
          return (
            <FlexDiv
              cursor="pointer"
              margin="10px 10px"
              onClick={() => {
                openFile(fileData?.filename, fileData?.raw_url);
              }}
            >
              <img
                width="25px"
                src="https://icon-library.com/images/files-icon-png/files-icon-png-10.jpg"
              />
              <Text color="#6E6B68">{fileData?.filename}</Text>
            </FlexDiv>
          );
        })}
      </FlexDiv>
    );
  };

  return (
    <WrapperDiv>
      <FlexDiv justifyContent="space-between">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={item?.owner?.avatar_url}
            alt="image"
            width="40"
            height="40"
            style={{ borderRadius: "50%" }}
          />
          <Text fontWeight="bold" margin="0px 10px">
            {item?.owner?.login}
          </Text>
        </div>
        <FlexDiv>
          <Text fontWeight="bold" margin="0px 10px">
            Stars
          </Text>
          <Text fontWeight="bold" margin="0px 10px">
            {Object.keys(item?.files)?.length} File(s)
          </Text>
          <Text fontWeight="bold" margin="0px 10px">
            Comments
          </Text>
        </FlexDiv>
      </FlexDiv>
      <FlexDiv justifyContent="left" margin="10px 0">
        <Text color="#6E6B68">Created at: {renderDate(item?.created_at)}</Text>
        <Text color="#6E6B68" margin="0px 10px">
          Last Updated: {renderDate(item?.updated_at)}
        </Text>
      </FlexDiv>
      {filesData()}
    </WrapperDiv>
  );
};

export default Gist;
