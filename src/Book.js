const Book = (props) => {
  const { img, title, author, number } = props;
  console.log(number);

  return (
    <article className="book">
      <div>
        <img src={img} alt={title} />
        <h2>{title}</h2>

        <h4>{author}</h4>
        <span className="number">{`# ${number + 1}`}</span>
      </div>
    </article>
  );
};

export default Book;
