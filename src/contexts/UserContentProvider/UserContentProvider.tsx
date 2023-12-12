import loadContentList from "@/functions/loadContentList/loadContentList";
import { useAuth, useUser } from "@clerk/clerk-react";
import Movie from "@customTypes/firestore/record/Movie";
import TvShow from "@customTypes/firestore/record/TvShow";
import {
  FC,
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";

type Props = {
  children: ReactNode;
};

const UserContentContext = createContext<any | null>(null);

export const useUserContent = () => {
  return useContext(UserContentContext);
};

const UserContentProvider: FC<Props> = ({ children }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [contentListId, setContentListId] = useState<string>("");
  const [contentList, setContentList] = useState<(TvShow | Movie)[] | []>([]);

  useEffect(() => {
    const loadContentListOnInit = async () => {
      const token = (await getToken({
        template: "integration_firebase",
      })) as string;
      loadContentList({
        token,
        user: user!,
        setContentListId,
        setContentList,
      });
    };

    loadContentListOnInit();
  }, []);

  const value = {
    contentList,
    setContentList,
    contentListId,
  };

  return (
    <UserContentContext.Provider value={value}>
      {children}
    </UserContentContext.Provider>
  );
};

export default UserContentProvider;
