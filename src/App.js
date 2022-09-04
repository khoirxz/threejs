import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, ContactShadows } from '@react-three/drei'

export default function App() {
  return (
    <>
      <header>This is a beech tree.</header>
      <Canvas camera={{ position: [-10, 10, 40], fov: 50 }}>
        <hemisphereLight color="black" groundColor="white" intensity={0.75} />
        <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
        <group position={[0, -10, 0]}>
          <Model
            position={[0, 0.25, 0]}
            url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf"
          />
          <ContactShadows scale={15} blur={10} far={20} />
        </group>
        <OrbitControls />
        {/* <Model position={[0, 0.25, 0]} url={MODELS[model]} /> */}
      </Canvas>
      <h1>sdad</h1>
    </>
  )
}

function Model({ url, ...props }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} {...props} />
}
