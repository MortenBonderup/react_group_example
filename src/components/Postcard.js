export default function PostCard({post}) {
   
  return (
      <div className="card_container">
      <span className="ident">{post.tid}</span>
      <section className="card">
        <div>
          <p style={{fontWeight: "bold"}}>Headline</p>
          <p>{post.taskheadline}</p>
        </div>

        <div>
          <p style={{fontWeight: "bold"}}>Description</p>
          <p>{post.taskdescription}</p>
        </div>

      </section>
    </div>
  );
}
