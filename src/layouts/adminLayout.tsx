import { PageContainer } from "@ant-design/pro-components"
import { Outlet } from "@umijs/max"

// 尽量不要用export default吧, 不然export * 的时候比较恶心
// 但是这边没办法,给umi的route用所以用一下default
export default () => {
  return (
		<PageContainer>
			<Outlet />
		</PageContainer>
	)
}