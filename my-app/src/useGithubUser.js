import useSWR from "swr";



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
  } = useSWR(`https://api.github.com/users/${username}`);

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
