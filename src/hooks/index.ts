import { queryState, resultsState } from "../atoms";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

export function useSearchResults() {
  const { query } = useParams();
  const [value, setQueryValue] = useRecoilState(queryState);
  const results = useRecoilValue(resultsState);

  useEffect(() => {
    if (query) {
      setQueryValue(query);
    }
  }, [query]);

  return results;
}
