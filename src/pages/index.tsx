import Link from 'next/link';

const IndexPage = () => {
  return (
    <>
      <h1>Welcome to your tRPC starter!</h1>
      <p>
        Check <a href="https://trpc.io/docs">the docs</a> whenever you get
        stuck, or ping <a href="https://twitter.com/alexdotjs">@alexdotjs</a> on
        Twitter.
      </p>
      <Link href={`/ssr`}>
        <a>Check SSR behavior</a>
      </Link>
      <br />
      <Link href={`/ssr-prefetch`}>
        <a>Check SSR with Prefetch behavior</a>
      </Link>
      <br />
      <Link href={`/ssg`}>
        <a>Check SSG behavior</a>
      </Link>
    </>
  );
};

export default IndexPage;
