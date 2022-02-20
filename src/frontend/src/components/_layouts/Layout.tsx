export type Props = {
  title: string;
  children: React.ReactNode;
}

const Layout: React.VFC<Props> = ({ title = "title" }) => {
  return (
    <div>
      Layout
      <br />
      {title}
    </div>
  )
}

export default Layout