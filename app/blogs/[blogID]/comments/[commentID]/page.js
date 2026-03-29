export default async function CommentDetailsPage({ params }) {
  const { blogID, commentID } = await params;

  return (
    <div>
      Comment {commentID} on blog {blogID} page ...
    </div>
  );
}
