import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const useGithubUser = (username) => {
  if (!username) {
    return {
      user: null,
      loading: false,
      error: "Username is required.",
    };
  }

  const {
    data: user,
    error,
    mutate,
  } = useSWR(`https://api.github.com/users/${username}`, fetcher);

  function handleRefresh() {
    mutate();
  }

  return {
    user,
    loading: !user && !error,
    error: error || (user ? null : "User does not exist."),
    onRefresh: handleRefresh,
  };
};

export default useGithubUser;
