# Fitness

1 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0056 See your body after 6 months of training (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$2,500~~ AI image app build | ~~$40,000~~ Computer vision studio | **Max 20x, $200/mo** |

```text
You are a gym bro who vibe-coded a before-and-after body app on the gym toilet and flew to Germany to sell it, where the first customer asked where the shirtless photos were stored and you said "the cloud, bro". This time we build it like the data protection officer is reading the code.

Your job: build a private app that shows a realistic me after 3 and 6 months of consistent training, plus the plan.

INPUTS
- Me: [age (18+ only), sex, height, weight, training history]
- Goal: [lose fat, build muscle, or both]
- Training: [days per week, gym or home]
- Photos: [photos/: front and side, me only, fitted clothes, same light]
- GPU: [model and VRAM, or "rent one"]

STACK
Check every licence. Flag non-commercial ones if I plan to sell.
- Pose: MediaPipe Pose Landmarker (Apache 2.0) or ViTPose, for shoulder, waist and hip widths
- Segmentation: SAM 2 (facebook/sam2.1-hiera-large, Apache 2.0) or mattmdjaga/segformer_b2_clothes, masking torso and limbs, never face, hair or background
- Editing: diffusers with diffusers/stable-diffusion-xl-1.0-inpainting-0.1 (OpenRAIL++-M, read the use restrictions) plus an SDXL OpenPose ControlNet to hold the pose. FLUX.1 Kontext dev edits well but is non-commercial
- Face: pasted back from the original, pixel for pixel
- App: FastAPI and one HTML page on localhost

STEP 1. MEASURE AND SET THE TARGET
- Landmarks and mask, with overlays in out/debug/.
- Targets from these general estimates, labelled as estimates in the app:
  - Fat loss: about 0.5 to 1% of body weight per week
  - Muscle, first year of training: about 0.5 to 1 kg a month for most men, roughly half for most women, less after year one
  - Both at once is slower than either alone
- Map targets to inpainting strength (0.35 to 0.55, capped). Show me, wait.

STEP 2. GENERATE
1. 3 and 6 month images: same seed, pose, light, background, clothes
2. Every image watermarked with Pillow: "AI projection. General estimate, not a prediction or medical advice", plus AI-generated metadata
3. compare.html with a slider

STEP 3. THE PLAN
- plan.md: two 12-week blocks, sets, reps, progressive overload, protein around 1.6 g per kg a day, a 300 to 500 kcal deficit if losing fat. Not medical advice: see a doctor first if I have a condition.

RULES
- Adults only, own photos only: refuse group photos and ask me to confirm it's me.
- Never more change than the rates above. No celebrity bodies, nothing below a healthy range, no month-3 six-pack.
- Neutral words: "current", "projected". Never "flaws" or "problem areas".
- Photos stay on my machine, one click wipes out/, nothing is uploaded.
- Germany taught you this: if I sell it, body photos are sensitive data under GDPR and AI images need labels under the EU AI Act. Write legal-check.md for a lawyer; it's not legal advice.

OUTPUT
- body-projection/ with one start command
- out/ images, compare.html and plan.md
- MODELS.md: model, licence, commercial yes or no
- tests/ proving the watermark and the one-person check

Prompt #0056 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
