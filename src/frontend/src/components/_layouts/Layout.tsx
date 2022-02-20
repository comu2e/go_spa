export type Props = {
  title: string;
  children: React.ReactNode;
}

const Layout: React.VFC<Props> = (props) => {
  return (
    <div>
      {props.title}
    </div>
  )
}

export default Layout