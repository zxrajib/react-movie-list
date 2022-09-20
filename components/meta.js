
const Meta = ({title,keywords,description}) => {
  return (
    <div>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="{keywords}" />
        <meta name="description" content="{description}" />
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/favicon.ico" />
        <title>{title}</title>
      </head>
    </div>
  );
}

Meta.defaultProps ={
  title:"WatchMe",
  keywords:"movie app",
  description:'Free Movie Watch'
}
export default Meta;
