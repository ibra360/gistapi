import { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import GistList from "./components/GistList";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import debounce from "lodash.debounce";
import { getGistForUser, getPublicGists } from "./services/gistService";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const filtersDebounce = useCallback(
    debounce(async (e) => {
      getData(e);
    }, 600),
    []
  );

  function onChangesearch(search) {
    filtersDebounce(search);
  }

  const getData = async (e) => {
    try {
      setLoading(true);
      let userList;
      if (e) {
        userList = await getGistForUser(e);
      } else {
        userList = await getPublicGists();
      }
      console.log({ userList });
      setUsers(userList?.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setUsers([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Wrapper className="App" data-testid="app">
      <Header onChangesearch={onChangesearch} />
      <GlobalStyles />
      <GistList users={users} loading={loading} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
