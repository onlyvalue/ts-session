import type { ReactNode } from "react";
import type { PostListState } from "../types";

interface PostListProps {
  state: PostListState;
  children: ReactNode;
}

function PostList({ state, children }: PostListProps) {
  if (state.status === "loading") {
    return (
      <>
        <p>게시글을 불러오는 중입니다.</p>
      </>
    );
  }

  if (state.status === "error") {
    return <p>오류: {state.message}</p>;
  }

  if (state.status === "empty") {
    return (
      <>
        <p>아직 게시글이 없습니다.</p>
      </>
    );
  }

  return <div>{children}</div>;
}

export default PostList;
