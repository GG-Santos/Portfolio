import { gsap } from "gsap-trial";
import { useGSAP } from "@gsap/react";
    
import { CustomEase } from "gsap-trial/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap-trial/EasePack";

/* The following eases are Club GSAP perks */
import { CustomBounce } from "gsap-trial/CustomBounce"; // extends CustomEase
import { CustomWiggle } from "gsap-trial/CustomWiggle"; // extends CustomEase
    
import { Flip } from "gsap-trial/Flip";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { Observer } from "gsap-trial/Observer";
import { ScrollToPlugin } from "gsap-trial/ScrollToPlugin";
import { Draggable } from "gsap-trial/Draggable";
import { MotionPathPlugin } from "gsap-trial/MotionPathPlugin";
import { EaselPlugin } from "gsap-trial/EaselPlugin";
import { PixiPlugin } from "gsap-trial/PixiPlugin";
import { TextPlugin } from "gsap-trial/TextPlugin";

/* The following plugins are Club GSAP perks */
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { GSDevTools } from "gsap-trial/GSDevTools";
import { InertiaPlugin } from "gsap-trial/InertiaPlugin";
import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";
import { MotionPathHelper } from "gsap-trial/MotionPathHelper";
import { Physics2DPlugin } from "gsap-trial/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap-trial/PhysicsPropsPlugin";
import { ScrambleTextPlugin } from "gsap-trial/ScrambleTextPlugin";
import { SplitText } from "gsap-trial/SplitText";


gsap.registerPlugin(useGSAP,Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,DrawSVGPlugin,ScrollSmoother,GSDevTools,InertiaPlugin,MorphSVGPlugin,MotionPathHelper,Physics2DPlugin,PhysicsPropsPlugin,ScrambleTextPlugin,SplitText,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle);

