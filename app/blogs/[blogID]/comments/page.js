export default async function BlogCommentsPage({ params }) {
  const { blogID } = await params;

  return <div>All comments on {blogID} page ...</div>;
}
