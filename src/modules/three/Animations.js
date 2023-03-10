import { CharacterMesh } from './rhpidEngine/rE_Character'
import { Euler, Vector3 } from 'three'

const Joints = CharacterMesh.RIG_Joints
const rad = (x) => x*Math.PI/180
const vlerp = (Vector, Alpha) => new Vector3().lerp(Vector, Alpha)

export const Animations = {
	Idle: (delta) => { //Use Arguments!
		Joints.RJ.C0(vlerp(new Vector3(3*Math.cos(delta/500),3*Math.sin(delta/500),0), .5), new Euler(rad(200*Math.cos(delta/1e3)),0,0))
		
	}
}