import { useEffect } from 'react';

type Props = {
	open: boolean;
	onClose: () => void;
};

export default function OrderPopup({ open, onClose }: Props) {
	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === 'Escape') onClose();
		}
		if (open) document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, [open, onClose]);

	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div className="absolute inset-0 bg-black/50" onClick={onClose} />
			<div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6">
				<h3 className="text-xl font-bold mb-2">Amazon link coming soon</h3>
				<p className="text-sm text-gray-600 mb-4">We're working on bringing this product to Amazon. For bulk orders or updates, email us at <strong>orders@nature.com</strong>.</p>
				<div className="flex justify-end">
					<button onClick={onClose} className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">Close</button>
				</div>
			</div>
		</div>
	);
}
