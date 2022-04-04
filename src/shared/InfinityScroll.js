import React, { useCallback, useEffect } from "react";
import _ from "lodash";
import { Spinner } from "../elements";

const InfinityScroll = (props) => {
  const {
    children = null,
    callNext = () => {},
    isNext = false,
    loading = false,
  } = props;

  const handle_Scroll = _.throttle(() => {
    if (loading) return;
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (scrollHeight - innerHeight - scrollTop < 200) {
      callNext();
    }
  }, 300);

  const handleScroll = useCallback(handle_Scroll, [loading]);

  useEffect(() => {
    if (loading) return;

    if (isNext) window.addEventListener("scroll", handleScroll);
    else window.removeEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNext, loading]);

  return (
    <>
      {children}
      {isNext && <Spinner />}
    </>
  );
};

export default InfinityScroll;
