import PostForm from "@/components/forms/PostForm";

const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/add-post.jpg"
            width={25}
            height={25}
            alt="add"
          />
          <h3 className="h3-bold md:h2-bold text-left w-full">Create Post</h3>
        </div>
         <PostForm action="create"/>
      </div>
    </div>
  );
};

export default CreatePost;