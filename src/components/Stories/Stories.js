import { useFetchHook } from "../../Context/FetchContext";

const Stories = () => {
  const { posts, isLoading } = useFetchHook();
  console.log(posts);

  if (isLoading) {
    return <div>...loading</div>;
  }
  return <div>{posts && posts.map((el) => <div>{el.name}</div>)}</div>;
};

export default Stories;
