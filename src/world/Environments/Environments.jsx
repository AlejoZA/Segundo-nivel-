import { Environment} from "@react-three/drei";

export default function Environments() {
    return <>
        <Environment
            files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/belfast_sunset_puresky_4k.hdr"}
            preset={null} 
            background={false}
            ground={{
                height:20,
                scale: 300,
                radius: 500
            }}
        />
    </>
}