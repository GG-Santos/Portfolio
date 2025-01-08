"use client";

import CanvasWrapper from "./CanvasWrapper";
import Experience from "./Experience";

export default function ParticlesPage() {
	return (
		<CanvasWrapper
			camera={{
				fov: 50,
				near: 0.001,
				far: 2000,
				position: [0, 0, 640],
			}}
		>
			<Experience />
		</CanvasWrapper>
	);
}
