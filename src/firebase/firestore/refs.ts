import { firestore } from './';
import * as FirestorePaths from './constants';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore/lite';


export const ProjectsCollectionRef = collection(firestore,
  FirestorePaths.PROJECTS,
);

export const ProjectDocRefById = (uid: string) => doc(ProjectsCollectionRef, `${uid}`);

export const CollectionProjects = async () => {
    const projects = await getDocs(ProjectsCollectionRef);
    return projects.docs.map(doc => doc.data());
  };

export const ProjectDocById =  async (uid: string) => {
 const res = await getDoc(ProjectDocRefById(uid));
 return res.data;
};