import Spinner from './Spinner'

export default function OverlaySpinner({ isLoading }: { isLoading: boolean }) {
    if (!isLoading) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <Spinner />
        </div>
    )
}