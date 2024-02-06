export default function Deployment() {
    return <div>Github Actions - SHA - `${process.env.GITHUB_SHA} ?? No GitHub Actions SHA found`</div>
}