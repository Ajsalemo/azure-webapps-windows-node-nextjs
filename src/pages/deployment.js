export default function Deployment() {
    return <div>GitHub SHA - {process.env.NEXT_PUBLIC_GITHUB_SHA ?? "No SHA found"}</div>
}