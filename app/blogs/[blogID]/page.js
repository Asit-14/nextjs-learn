export default async function BlogDetailsPage({ params }) {
  const { blogID } = await params;

  return <div>Hey this is blog {blogID} ...</div>;
}
