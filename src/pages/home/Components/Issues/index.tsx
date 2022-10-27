import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Issue } from "./Components/Issue";
import { Contanier, SearchContanier, Header, IssuesContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../../lib/Axios";
export interface Post {
  id: number;
  url: string;
  title: string;
  body: string;
  created_at: string;
  number: number;
  total_count: number;
}

const searchFromSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFromSchema>;

export const Issues = () => {
  const [issuePost, setIssuePost] = useState<Post[]>([]);
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(searchFromSchema),
  });

  async function fetchIssues(query: string) {
    const { data } = await api.get<{ items: Post[] }>(
      `/search/issues?q=${query}%20repo:JosephNovy/Github_Blog`
    );
    setIssuePost(data.items);
  }

  function handleSearchIssue(data: SearchFormInputs) {
    fetchIssues(data.query);
  }

  useEffect(() => {
    fetchIssues("");
  }, []);
  console.log(issuePost);
  return (
    <Contanier>
      <SearchContanier>
        <Header>
          <h3>Publicações</h3>
          <span>
            <p>{issuePost.length} publicações</p>
          </span>
        </Header>
        <form onSubmit={handleSubmit(handleSearchIssue)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register("query")}
          />
          <button type="submit" disabled={isSubmitting}>
            <span>Search</span>
          </button>
        </form>
      </SearchContanier>
      <IssuesContainer>
        {issuePost.map((item) => {
          return (
            <Issue
              key={item.id}
              body={item.body}
              url={`/post/${item.number}`}
              title={item.title}
              created_at={new Date(item.created_at)}
            />
          );
        })}
      </IssuesContainer>
    </Contanier>
  );
};
