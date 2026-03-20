// Pregnancy Recipe Library — Amai-Mtoto
// Culturally rooted recipes for Black and mixed heritage mothers
// Clinical basis: NHS GD Recipe Book, NHS Healthier You Cultural Food Guide, Blood Pressure Association African Caribbean Guide
// All recipes written originally — inspired by cultural traditions and NHS nutritional guidance

export const PREGNANCY_RECIPES = {

  trimester1: [
    {
      id: "t1-ginger-zobo",
      name: "Ginger & Zobo Morning Tea",
      trimester: [1],
      tags: ["nausea relief", "hydration", "iron", "GD-friendly"],
      prepTime: "5 min",
      cookTime: "10 min",
      serves: 2,
      calories: 35,
      nutrition: { carbs: "8g", protein: "0g", fat: "0g", iron: "low", folate: "low" },
      description: "Dried hibiscus (zobo/sorrel) with fresh ginger — a gentle, caffeine-free drink that settles nausea and provides antioxidants. Unsweetened or lightly sweetened with honey.",
      why: "Ginger is one of the most evidence-backed remedies for pregnancy nausea. Hibiscus is rich in vitamin C which aids iron absorption.",
      ingredients: [
        "2 tbsp dried hibiscus flowers (zobo/sorrel)",
        "2cm fresh ginger root, sliced",
        "500ml boiling water",
        "1 tsp honey (optional — avoid if GD)",
        "Squeeze of lime"
      ],
      method: [
        "Add hibiscus flowers and ginger to a heatproof jug",
        "Pour over boiling water and steep for 8–10 minutes",
        "Strain into cups",
        "Add honey and lime if using",
        "Drink warm or allow to cool — both work well for nausea"
      ],
      tip: "Keep a flask of this by your bed for morning sickness. Sip slowly before getting up.",
      gdNote: null
    },
    {
      id: "t1-moringa-egg",
      name: "Moringa & Egg Stir with Plantain",
      trimester: [1, 2],
      tags: ["folate", "iron", "protein", "energy"],
      prepTime: "5 min",
      cookTime: "10 min",
      serves: 2,
      calories: 320,
      nutrition: { carbs: "32g", protein: "18g", fat: "12g", iron: "high", folate: "high" },
      description: "Scrambled eggs enriched with moringa powder — one of the most nutrient-dense foods available — served alongside boiled unripe plantain. A powerhouse first trimester breakfast.",
      why: "Moringa is exceptionally high in folate, iron and calcium — all critical in the first trimester. Eggs provide complete protein and choline for baby's brain development.",
      ingredients: [
        "3 eggs",
        "1 tsp moringa powder",
        "1 small onion, finely chopped",
        "1 tomato, diced",
        "½ green pepper, diced",
        "1 tsp rapeseed oil",
        "Black pepper to taste",
        "1 medium unripe plantain, boiled"
      ],
      method: [
        "Boil the plantain whole in its skin for 15 minutes until tender",
        "Beat eggs with moringa powder and a pinch of black pepper",
        "Heat rapeseed oil in a non-stick pan over medium heat",
        "Fry onion, tomato and pepper for 3–4 minutes until soft",
        "Pour in egg mixture and stir gently until just set",
        "Peel and slice plantain, serve alongside eggs"
      ],
      tip: "Moringa powder can be bought in most African and Caribbean food shops. A little goes a long way — start with half a teaspoon if the taste is new to you.",
      gdNote: "Unripe plantain is significantly lower GI than ripe — a good choice if you have gestational diabetes."
    },
    {
      id: "t1-folate-soup",
      name: "Green Spinach & Lentil Pepper Soup",
      trimester: [1],
      tags: ["folate", "iron", "nausea-friendly", "warming"],
      prepTime: "10 min",
      cookTime: "25 min",
      serves: 4,
      calories: 220,
      nutrition: { carbs: "28g", protein: "14g", fat: "4g", iron: "high", folate: "very high" },
      description: "A light but deeply nourishing soup using spinach, red lentils and scotch bonnet — gentle on a nauseous stomach while packing in the folate your baby needs most in the first 12 weeks.",
      why: "Spinach and lentils are two of the highest folate foods available. Folate is critical in the first trimester for preventing neural tube defects. This soup is easy to eat even when appetite is low.",
      ingredients: [
        "200g red lentils, rinsed",
        "200g fresh spinach or callaloo",
        "1 onion, chopped",
        "2 cloves garlic, crushed",
        "2cm fresh ginger, grated",
        "½ scotch bonnet (or to taste), whole",
        "1 reduced-salt vegetable stock cube in 1 litre water",
        "1 tsp rapeseed oil",
        "Juice of ½ lemon",
        "Black pepper"
      ],
      method: [
        "Heat oil in a large pan, add onion and cook 3–4 minutes",
        "Add garlic and ginger, stir for 1 minute",
        "Add lentils, stock and whole scotch bonnet",
        "Bring to boil, reduce heat, simmer 20 minutes until lentils are soft",
        "Remove scotch bonnet (leaving it whole keeps heat mild — pierce for more spice)",
        "Add spinach and stir through until wilted (2 minutes)",
        "Squeeze in lemon juice, season with black pepper",
        "Blend partially or leave chunky — both are delicious"
      ],
      tip: "Make a big batch and freeze in portions. Perfect for days when you have no appetite — just defrost and heat gently.",
      gdNote: "Red lentils are low GI and do not significantly spike blood sugar. An excellent choice for GD."
    },
    {
      id: "t1-plantain-porridge",
      name: "Unripe Plantain Porridge",
      trimester: [1, 2, 3],
      tags: ["iron", "energy", "GD-friendly", "filling"],
      prepTime: "10 min",
      cookTime: "20 min",
      serves: 3,
      calories: 280,
      nutrition: { carbs: "38g", protein: "8g", fat: "6g", iron: "moderate", folate: "moderate" },
      description: "A traditional West African porridge made from unripe plantain, crayfish and leafy greens. Rich in resistant starch which feeds good gut bacteria and keeps blood sugar stable.",
      why: "Unripe plantain has a significantly lower glycaemic index than ripe plantain or white rice. It is also a source of iron and potassium. Crayfish adds umami depth and protein.",
      ingredients: [
        "2 medium unripe green plantains, peeled and grated or blended",
        "1 tbsp dried crayfish (optional but traditional)",
        "1 small onion, blended",
        "1 tomato, blended",
        "1 tsp palm oil (or rapeseed oil)",
        "Handful of spinach or pumpkin leaves",
        "½ reduced-salt stock cube",
        "500ml water",
        "Scotch bonnet to taste"
      ],
      method: [
        "Blend peeled plantains with a little water to form a smooth paste",
        "Blend onion and tomato together separately",
        "Heat oil in a pot, add onion-tomato blend and crayfish, fry 3–4 minutes",
        "Add water and stock cube, bring to simmer",
        "Gradually add plantain paste, stirring constantly to avoid lumps",
        "Cook on low heat for 15 minutes, stirring regularly",
        "Add spinach in final 2 minutes",
        "Adjust consistency with water if needed — should be thick but pourable"
      ],
      tip: "Use a very green, firm plantain for the lowest GI and most resistant starch. The riper it is, the sweeter and higher GI it becomes.",
      gdNote: "Use rapeseed oil instead of palm oil to reduce saturated fat content. Limit palm oil to 1 tsp maximum."
    }
  ],

  trimester2: [
    {
      id: "t2-iron-egusi",
      name: "Iron-Rich Egusi Soup",
      trimester: [2, 3],
      tags: ["iron", "protein", "calcium", "omega-3"],
      prepTime: "15 min",
      cookTime: "35 min",
      serves: 4,
      calories: 380,
      nutrition: { carbs: "12g", protein: "28g", fat: "22g", iron: "very high", folate: "moderate" },
      description: "Ground melon seeds (egusi) cooked with spinach, stockfish and tomatoes. One of the most iron-dense West African dishes — particularly important in the second trimester when blood volume increases significantly.",
      why: "Egusi (ground melon seeds) are exceptionally high in protein, iron and healthy fats. Black women are more likely to develop iron deficiency anaemia in pregnancy. This dish directly addresses that gap.",
      ingredients: [
        "200g ground egusi (melon seeds)",
        "300g fresh spinach or bitter leaf",
        "200g stockfish or smoked mackerel (rinsed to reduce salt)",
        "400g tin chopped tomatoes",
        "1 onion, blended",
        "2 tbsp rapeseed oil (or reduced palm oil)",
        "1 scotch bonnet, whole",
        "1 reduced-salt stock cube",
        "2 cloves garlic, crushed",
        "Black pepper to taste"
      ],
      method: [
        "If using stockfish, soak in warm water for 20 minutes, rinse and flake",
        "Blend tomatoes and onion together",
        "Heat oil in a large pot, add tomato-onion blend and scotch bonnet",
        "Fry on medium heat for 10 minutes, stirring, until oil rises to top",
        "Add garlic and stock cube dissolved in 200ml water",
        "Add egusi gradually, stirring in — it will form clumps initially, keep stirring",
        "Add fish and simmer on low heat for 15 minutes",
        "Add spinach or bitter leaf, stir through",
        "Cook for a further 5 minutes",
        "Serve with a small portion of brown rice, unripe plantain, or a reduced portion of eba"
      ],
      tip: "Ask your midwife to check your iron levels at your 16-week appointment. If they are low, eating this 2–3 times a week can make a measurable difference.",
      gdNote: "Egusi soup is low carb and an excellent GD choice. Serve with unripe plantain or a very small portion of brown rice."
    },
    {
      id: "t2-jollof-brown",
      name: "Pregnancy Jollof Rice (Brown Rice)",
      trimester: [2, 3],
      tags: ["iron", "energy", "GD-friendly", "comfort food"],
      prepTime: "15 min",
      cookTime: "40 min",
      serves: 4,
      calories: 390,
      nutrition: { carbs: "52g", protein: "30g", fat: "8g", iron: "moderate", folate: "moderate" },
      description: "A lighter, pregnancy-adapted jollof rice using brown basmati, extra vegetables and lean chicken — all the comfort and flavour of the original with more fibre, less salt and a lower glycaemic load.",
      why: "Brown basmati rice has a lower GI than white rice, meaning steadier blood sugar. Added vegetables boost folate and iron. Less palm oil and low-salt stock reduce blood pressure risk — important for Black women who are more sensitive to salt.",
      ingredients: [
        "300g brown basmati rice, rinsed",
        "400g skinless chicken breast, cut into chunks",
        "400g tin chopped tomatoes",
        "1 large red pepper, chopped",
        "1 onion, blended",
        "2 cloves garlic, crushed",
        "2cm fresh ginger, grated",
        "½ scotch bonnet (optional)",
        "1 reduced-salt chicken stock cube in 500ml water",
        "100g okra, sliced",
        "2 tbsp chopped coriander",
        "1 tsp rapeseed oil",
        "1 tsp each: cumin, thyme, smoked paprika"
      ],
      method: [
        "Heat oil in a large deep pan, brown chicken pieces 3–4 minutes each side",
        "Remove chicken and set aside",
        "Add blended onion to pan, fry 3 minutes",
        "Add garlic, ginger, scotch bonnet and spices, stir 1 minute",
        "Add chopped tomatoes and red pepper, cook 8 minutes until thickened",
        "Add rice, stir well to coat in sauce",
        "Add stock, bring to boil, reduce heat, cover and simmer 25 minutes",
        "Add chicken and okra on top, replace lid, cook 10 more minutes",
        "Check rice is cooked and liquid absorbed",
        "Stir in coriander and serve"
      ],
      tip: "Make a large batch — jollof freezes beautifully and is a lifesaver on days when cooking feels impossible.",
      gdNote: "Brown basmati has a lower GI than white rice. Keep your portion to a fist size and fill half the plate with leafy vegetables or salad."
    },
    {
      id: "t2-callaloo-fish",
      name: "Steamed Callaloo with Grilled Snapper",
      trimester: [2, 3, 4],
      tags: ["calcium", "iron", "omega-3", "blood pressure", "low-salt"],
      prepTime: "10 min",
      cookTime: "20 min",
      serves: 2,
      calories: 295,
      nutrition: { carbs: "8g", protein: "38g", fat: "10g", iron: "high", folate: "high" },
      description: "Callaloo — the iron and calcium powerhouse of Caribbean cooking — steamed with garlic and scotch bonnet, served alongside grilled red snapper seasoned with annatto and herbs. One of the most nutritionally complete pregnancy meals in this library.",
      why: "Callaloo is one of the richest plant sources of iron and calcium available. Red snapper provides omega-3 fatty acids essential for baby's brain and eye development. Grilling (not frying) keeps saturated fat low and is important for blood pressure management.",
      ingredients: [
        "400g fresh or tinned callaloo (drained if tinned)",
        "2 red snapper fillets (or sea bream)",
        "2 cloves garlic, crushed",
        "½ scotch bonnet, whole",
        "1 small onion, sliced",
        "1 tsp annatto seeds (or ½ tsp paprika)",
        "Juice of 1 lime",
        "Fresh thyme sprigs",
        "1 tsp rapeseed oil",
        "Black pepper to taste"
      ],
      method: [
        "Marinate fish: rub with lime juice, garlic, thyme and black pepper — set aside 10 minutes",
        "Toast annatto seeds in a dry pan 1 minute, then grind or use as infusion in warm oil",
        "Grill fish under medium-high heat 5–6 minutes each side until cooked through",
        "Meanwhile, heat oil in a pan, add onion and scotch bonnet, soften 3 minutes",
        "Add callaloo and garlic, stir well",
        "Cover and steam on low heat 8 minutes, stirring occasionally",
        "Season with black pepper — no added salt",
        "Serve fish on bed of callaloo with lime wedges"
      ],
      tip: "Annatto gives the fish a beautiful golden colour and a mild nutty flavour — it is a traditional Caribbean flavouring that adds interest without salt.",
      gdNote: "This is an excellent GD meal — very low carbohydrate, high protein and high in healthy fats. No modifications needed."
    },
    {
      id: "t2-groundnut-soup",
      name: "Groundnut Soup with Sweet Potato",
      trimester: [2, 3],
      tags: ["protein", "healthy fats", "iron", "calcium", "warming"],
      prepTime: "15 min",
      cookTime: "40 min",
      serves: 4,
      calories: 420,
      nutrition: { carbs: "35g", protein: "24g", fat: "20g", iron: "high", folate: "moderate" },
      description: "A rich West African peanut-based soup with sweet potato and chicken — full of healthy monounsaturated fats, protein and iron. Warming, filling and deeply satisfying.",
      why: "Peanuts (groundnuts) are high in protein, healthy fats, and folate. Sweet potato provides beta-carotene (converted to Vitamin A), potassium and slow-release carbohydrate. Together they make a nutritionally dense pregnancy meal.",
      ingredients: [
        "4 tbsp natural peanut butter (no added salt or sugar)",
        "500g chicken thighs, bone-in (or lean goat)",
        "2 medium sweet potatoes, peeled and cubed",
        "400g tin chopped tomatoes",
        "1 onion, chopped",
        "3 cloves garlic, crushed",
        "2cm ginger, grated",
        "1 scotch bonnet, whole",
        "1 reduced-salt chicken stock cube in 600ml water",
        "1 tsp rapeseed oil",
        "Fresh coriander to serve"
      ],
      method: [
        "Season chicken with black pepper",
        "Heat oil in large pot, brown chicken all over 5 minutes, remove",
        "Fry onion in same pot 3 minutes",
        "Add garlic, ginger, cook 1 minute",
        "Add tomatoes and scotch bonnet, simmer 8 minutes",
        "Whisk peanut butter into stock until smooth",
        "Add stock mixture to pot along with sweet potato and chicken",
        "Bring to boil, reduce heat, cover and simmer 30 minutes",
        "Check chicken is cooked through, sweet potato is tender",
        "Remove scotch bonnet, shred chicken off bone if preferred",
        "Serve with a small portion of brown rice or boiled unripe plantain"
      ],
      tip: "Choose natural peanut butter with no added salt or sugar — check the label. Some shop-bought versions are very high in salt.",
      gdNote: "Use a smaller portion of sweet potato and pair with a large salad to keep the GI lower."
    }
  ],

  trimester3: [
    {
      id: "t3-pepper-soup",
      name: "Low-Salt Pregnancy Pepper Soup",
      trimester: [3],
      tags: ["blood pressure", "iron", "protein", "low-salt", "warming"],
      prepTime: "10 min",
      cookTime: "35 min",
      serves: 4,
      calories: 260,
      nutrition: { carbs: "6g", protein: "32g", fat: "10g", iron: "high", folate: "low" },
      description: "The classic Nigerian pepper soup, adapted for the third trimester with reduced salt and blood-pressure-friendly herbs. Rich, warming and deeply restorative — especially good for swollen ankles and evening discomfort.",
      why: "In the third trimester, Black women face higher risk of pre-eclampsia and hypertension. This recipe uses fresh herbs and spices for flavour instead of salt, and includes potassium-rich ingredients which help counteract sodium. Always tell your midwife about any significant swelling or headaches.",
      ingredients: [
        "600g lean goat, lamb neck or chicken pieces",
        "1 tsp ehuru (calabash nutmeg) or regular nutmeg",
        "1 tsp uda (negro pepper) or black pepper",
        "1 tsp uziza seeds or extra black pepper",
        "2 scotch bonnets, whole",
        "1 onion, quartered",
        "3 cloves garlic",
        "2cm ginger",
        "Fresh thyme, scent leaves or basil",
        "1 reduced-salt stock cube",
        "1 litre water",
        "NO added salt"
      ],
      method: [
        "Blend or pound ehuru, uda and uziza seeds to a powder if using whole",
        "Wash meat well, place in pot with onion, garlic, ginger and half the spices",
        "Add water and stock cube, bring to boil",
        "Skim any foam from surface",
        "Add remaining spices and whole scotch bonnets",
        "Reduce heat, cover and simmer 25–30 minutes until meat is tender",
        "Add fresh herbs in final 5 minutes",
        "Taste — the spices should provide enough flavour without added salt",
        "Serve in deep bowls"
      ],
      tip: "If you cannot find the traditional spices, use black pepper, a pinch of nutmeg and cloves — the principle is the same. The depth of flavour means you genuinely do not need salt.",
      gdNote: "Pepper soup is naturally very low carbohydrate — an ideal GD meal. No modifications needed."
    },
    {
      id: "t3-chocho-curry",
      name: "Jamaican Chocho (Chayote) Curry with Brown Rice",
      trimester: [3],
      tags: ["blood pressure", "low GI", "GD-friendly", "calcium", "potassium"],
      prepTime: "10 min",
      cookTime: "25 min",
      serves: 4,
      calories: 310,
      nutrition: { carbs: "42g", protein: "8g", fat: "8g", iron: "low", folate: "moderate" },
      description: "Chocho (chayote) is a low-calorie, high-potassium Caribbean vegetable. Cooked as a curry with coconut oil, scotch bonnet and thyme, served with brown jasmine rice. A gentle, blood-pressure-friendly third trimester meal.",
      why: "Potassium is nature's counterbalance to sodium — it actively helps lower blood pressure. Chocho is one of the best vegetable sources of potassium. Important for Black women who are more salt-sensitive and at higher risk of pre-eclampsia.",
      ingredients: [
        "3 medium chochos (chayote), peeled, seeded and cubed",
        "400g tin chickpeas, drained and rinsed",
        "1 small onion, finely chopped",
        "3 cloves garlic, crushed",
        "1 tsp fresh ginger",
        "2 tbsp mild curry powder",
        "¼ tsp ground allspice",
        "½ tsp dried thyme",
        "1 whole scotch bonnet (or ¼ tsp cayenne)",
        "1 tsp coconut oil or rapeseed oil",
        "300ml reduced-salt vegetable stock",
        "200g brown jasmine rice, cooked to serve"
      ],
      method: [
        "Heat oil in large pan, add onion and cook until soft",
        "Add garlic, ginger and stir constantly until fragrant, 1 minute",
        "Add curry powder and allspice, stir 1 minute",
        "Add chocho, chickpeas, thyme, scotch bonnet and stock",
        "Bring to boil, cover and simmer 15–20 minutes until chocho is tender",
        "Check seasoning — add black pepper, no added salt",
        "Serve with a fist-sized portion of brown rice",
        "Garnish with fresh coriander if available"
      ],
      tip: "Chocho is available in most African, Caribbean and Asian food shops. If you cannot find it, courgette or butternut squash work as substitutes though the flavour differs.",
      gdNote: "Keep brown rice to a fist-sized portion. The chocho and chickpeas are both low GI — this is an excellent GD meal."
    },
    {
      id: "t3-ackee-saltfish-low",
      name: "Reduced-Salt Ackee & Saltfish",
      trimester: [3],
      tags: ["protein", "omega-3", "blood pressure", "potassium", "low-salt"],
      prepTime: "20 min",
      cookTime: "15 min",
      serves: 2,
      calories: 340,
      nutrition: { carbs: "10g", protein: "28g", fat: "18g", iron: "moderate", folate: "moderate" },
      description: "Jamaica's national dish, adapted for pregnancy with one crucial change — the saltfish is soaked and rinsed multiple times to dramatically reduce sodium. Served with baked (not fried) plantain and avocado.",
      why: "Ackee provides healthy fats, protein and potassium. Saltfish (cod) is high in omega-3. The traditional version is very high in salt — which is a real concern for Black women in the third trimester. This version keeps all the flavour while making it pregnancy-safe.",
      ingredients: [
        "200g salted codfish (saltfish)",
        "280g tin ackee, drained (or fresh if available)",
        "1 small onion, thinly sliced",
        "2 spring onions, chopped",
        "1 red pepper, sliced",
        "1 tomato, chopped",
        "½ scotch bonnet, deseeded and sliced",
        "Fresh thyme",
        "1 tsp rapeseed oil",
        "Black pepper",
        "1 ripe plantain, baked (not fried)",
        "½ avocado to serve"
      ],
      method: [
        "IMPORTANT — desalt the fish: soak in cold water for 2 hours, changing water twice",
        "Boil soaked fish for 10 minutes, drain, rinse, then flake — removing all bones and skin",
        "Taste the fish — it should be very mildly salty, not overpoweringly so",
        "Score plantain skin, bake at 200°C for 20 minutes until soft",
        "Heat rapeseed oil in pan, soften onion and spring onions 3 minutes",
        "Add pepper, tomato, scotch bonnet and thyme, cook 3 minutes",
        "Add flaked fish, stir gently",
        "Add ackee last — stir very gently as it breaks easily",
        "Cook 3 minutes, season with black pepper only — no added salt",
        "Serve with baked plantain and sliced avocado"
      ],
      tip: "The two-hour soak with water changes is non-negotiable for this pregnancy version. The original version can contain 3–4 times the daily recommended sodium limit.",
      gdNote: "Ackee is naturally low carb. Choose a less ripe (firmer) plantain for lower GI. Skip the plantain and serve with salad for strict GD management."
    }
  ],

  trimester4: [
    {
      id: "t4-bone-broth",
      name: "African Bone Broth (Ofe Onugbu Base)",
      trimester: [4],
      tags: ["recovery", "collagen", "iron", "breastfeeding", "postnatal"],
      prepTime: "10 min",
      cookTime: "120 min",
      serves: 6,
      calories: 180,
      nutrition: { carbs: "4g", protein: "22g", fat: "8g", iron: "high", folate: "moderate" },
      description: "A slow-simmered bone broth using beef or chicken bones with bitter leaf and uziza — the West African postnatal recovery soup. Made by grandmothers for generations to restore the body after birth. Now we know the science: collagen, glycine, minerals and electrolytes are exactly what a recovering body needs.",
      why: "Bone broth provides collagen — essential for healing after birth, especially after a C-section. The minerals support milk production in breastfeeding mothers. Bitter leaf has traditional significance as a postnatal tonic across West Africa.",
      ingredients: [
        "1kg beef bones or whole chicken carcass",
        "Handful of dried bitter leaf or fresh spinach",
        "1 onion, halved",
        "3 cloves garlic",
        "2cm ginger",
        "2 bay leaves",
        "Fresh thyme",
        "1 tbsp apple cider vinegar (draws minerals from bones)",
        "1.5 litres water",
        "Black pepper"
      ],
      method: [
        "If using beef bones, roast at 200°C for 20 minutes first — adds depth of flavour",
        "Place bones in large pot with all ingredients including vinegar",
        "Bring to boil and skim any foam from surface",
        "Reduce to the lowest possible simmer — a gentle bubble",
        "Cook for minimum 2 hours (4–6 hours is ideal)",
        "Strain through a fine sieve",
        "Refrigerate — the fat will solidify on top and can be skimmed off",
        "Reheat and add bitter leaf or spinach just before serving",
        "Season with black pepper only"
      ],
      tip: "This freezes beautifully in ice cube trays — pop a few cubes into soups, stews or sip as a warm drink. New mothers in many cultures are encouraged to drink bone broth daily for the first 40 days.",
      gdNote: "Naturally low carbohydrate and blood-sugar neutral. An excellent choice for any health condition."
    },
    {
      id: "t4-lactation-porridge",
      name: "Breastfeeding Oat & Moringa Porridge",
      trimester: [4],
      tags: ["breastfeeding", "energy", "iron", "oats", "postnatal"],
      prepTime: "5 min",
      cookTime: "8 min",
      serves: 1,
      calories: 380,
      nutrition: { carbs: "48g", protein: "14g", fat: "12g", iron: "high", folate: "high" },
      description: "Oats are one of the most evidence-supported galactagogues — foods that support breast milk production. Combined with moringa (also traditionally used to support milk supply in West Africa), this porridge is a nourishing daily ritual for the early postnatal weeks.",
      why: "Iron stores are often depleted after birth. Oats, moringa and flaxseed all provide non-haem iron. Oats also provide slow-release energy — critical when you are feeding a baby through the night. Moringa is used across West and East Africa specifically to support breastfeeding.",
      ingredients: [
        "80g rolled oats",
        "1 tsp moringa powder",
        "1 tbsp ground flaxseed",
        "250ml semi-skimmed milk or oat milk",
        "100ml water",
        "1 tsp honey",
        "1 tbsp natural peanut butter",
        "Pinch of cinnamon",
        "Handful of berries or sliced banana to serve"
      ],
      method: [
        "Combine oats, milk and water in a small pan",
        "Cook on medium heat for 5–6 minutes, stirring regularly",
        "Remove from heat and stir in moringa powder, flaxseed and cinnamon",
        "Top with peanut butter, honey and fresh fruit",
        "Eat warm — add extra milk if you prefer a thinner consistency"
      ],
      tip: "Moringa can taste quite strong — start with half a teaspoon and build up. The peanut butter, honey and banana mask it well. Keep a supply of this ready to make quickly during the newborn period when cooking feels impossible.",
      gdNote: "If GD persists postnatally or you develop type 2 diabetes, reduce honey and banana and check blood sugar after eating. Oats are generally well tolerated."
    },
    {
      id: "t4-callaloo-stew",
      name: "Postnatal Callaloo & Chickpea Recovery Stew",
      trimester: [4],
      tags: ["recovery", "iron", "calcium", "breastfeeding", "plant-based"],
      prepTime: "10 min",
      cookTime: "20 min",
      serves: 3,
      calories: 290,
      nutrition: { carbs: "32g", protein: "16g", fat: "8g", iron: "very high", folate: "high" },
      description: "Callaloo with chickpeas, coconut milk and scotch bonnet — a warming, iron-rich postnatal stew. Inspired by both West African and Caribbean traditions of feeding new mothers green leafy vegetables to rebuild blood and strength.",
      why: "After birth — especially if there was significant blood loss — iron levels can be critically low. Callaloo is one of the most iron-dense greens available. Chickpeas add protein and folate. Light coconut milk adds creaminess and calories that breastfeeding mothers need.",
      ingredients: [
        "400g fresh callaloo, spinach or a mix of both",
        "400g tin chickpeas, drained",
        "150ml light coconut milk",
        "1 onion, chopped",
        "3 cloves garlic, crushed",
        "1 scotch bonnet, whole",
        "1 tomato, diced",
        "Fresh thyme",
        "1 tsp rapeseed oil",
        "200ml reduced-salt vegetable stock",
        "Juice of ½ lime"
      ],
      method: [
        "Heat oil in pan, soften onion 3 minutes",
        "Add garlic, tomato, thyme and scotch bonnet, cook 3 minutes",
        "Add chickpeas, stock and coconut milk",
        "Simmer 8 minutes",
        "Add callaloo, stir through and cover",
        "Cook 5 minutes until greens are wilted and tender",
        "Squeeze in lime juice",
        "Serve with a small portion of brown rice or boiled green banana"
      ],
      tip: "If you are breastfeeding and feeling exhausted, keep this stew in the fridge and reheat as needed. It improves in flavour over 24 hours.",
      gdNote: "Use reduced-fat coconut milk and keep rice or green banana portions small."
    }
  ],

  gd: [
    {
      id: "gd-breakfast-1",
      name: "GD Breakfast: Ackee, Egg & Avocado Plate",
      trimester: [2, 3],
      tags: ["GD-friendly", "low GI", "protein", "healthy fats"],
      prepTime: "10 min",
      cookTime: "10 min",
      serves: 1,
      calories: 380,
      nutrition: { carbs: "8g", protein: "22g", fat: "28g", iron: "moderate", folate: "moderate" },
      description: "A high-protein, low-carbohydrate breakfast that will not spike blood sugar. Ackee and scrambled egg with avocado — the three ingredients work together perfectly for GD management.",
      why: "Starting the day with a high-protein, low-carb breakfast is one of the most effective ways to manage gestational diabetes. Blood sugar tends to be harder to control in the morning due to pregnancy hormones.",
      ingredients: [
        "140g tin ackee, drained",
        "2 eggs",
        "½ avocado",
        "½ tomato, diced",
        "Fresh spring onion, chopped",
        "½ scotch bonnet (optional)",
        "1 tsp rapeseed oil",
        "Black pepper"
      ],
      method: [
        "Heat oil in a pan, add spring onion, tomato and scotch bonnet",
        "Sauté 2 minutes",
        "Add ackee, stir gently (ackee breaks easily)",
        "Beat eggs and pour alongside ackee",
        "Scramble gently until eggs are just set",
        "Serve with sliced avocado and black pepper"
      ],
      tip: "Test your blood sugar 1–2 hours after this meal to understand your personal response. Most women find this breakfast causes no significant spike.",
      gdNote: "This is one of the best GD breakfast options in the library. No modifications needed."
    },
    {
      id: "gd-lunch-1",
      name: "GD Lunch: Pepper Soup & Garden Egg Salad",
      trimester: [2, 3],
      tags: ["GD-friendly", "very low GI", "protein", "blood pressure"],
      prepTime: "10 min",
      cookTime: "30 min",
      serves: 2,
      calories: 290,
      nutrition: { carbs: "10g", protein: "28g", fat: "12g", iron: "high", folate: "moderate" },
      description: "A bowl of light pepper soup with a fresh garden egg (African aubergine) and tomato salad alongside. This is a near-zero carbohydrate meal that keeps blood sugar stable throughout the afternoon.",
      why: "Afternoon blood sugar management is critical for GD. Garden eggs (small African aubergines) have a very low glycaemic index. This combination provides satiety and nutrition without carbohydrate load.",
      ingredients: [
        "400g lean goat or chicken, cubed",
        "2 garden eggs (African aubergines) or regular aubergine",
        "1 scotch bonnet, whole",
        "1 onion, quartered",
        "Uziza leaves, scent leaves or spinach",
        "Reduced-salt stock cube",
        "500ml water",
        "FOR SALAD: 2 tomatoes, ½ cucumber, spring onion, lime juice, black pepper"
      ],
      method: [
        "Make pepper soup: place meat in pot with onion, stock cube, water and scotch bonnet",
        "Simmer 25 minutes until meat is tender",
        "Roughly chop garden eggs, add to soup for final 10 minutes",
        "Add greens in final 2 minutes",
        "For salad: dice tomatoes and cucumber, chop spring onion",
        "Dress with lime juice and black pepper — no oil needed",
        "Serve soup hot with salad alongside"
      ],
      tip: "Garden eggs are available in West African and Asian food shops. They have a slightly bitter flavour which becomes mild when cooked — very different from European aubergines.",
      gdNote: "This is one of the lowest-carbohydrate meals in the library. Blood sugar impact should be minimal."
    },
    {
      id: "gd-dinner-1",
      name: "GD Dinner: Brown Rice Jollof with Grilled Chicken & Greens",
      trimester: [2, 3],
      tags: ["GD-friendly", "balanced", "iron", "family meal"],
      prepTime: "15 min",
      cookTime: "45 min",
      serves: 4,
      calories: 420,
      nutrition: { carbs: "48g", protein: "36g", fat: "8g", iron: "moderate", folate: "moderate" },
      description: "The key swap for GD jollof is brown basmati rice in smaller portions, with half the plate covered with green vegetables and a large protein portion. All the flavour, GD-safe.",
      why: "The GD Eatwell Guide for African and Caribbean communities (NHS, 2022) recommends brown basmati as the best rice option. The lower GI combined with protein and vegetables significantly reduces the blood sugar spike compared to white rice jollof.",
      ingredients: [
        "200g brown basmati rice (smaller portion than usual)",
        "4 chicken breasts",
        "400g tin chopped tomatoes",
        "1 red pepper",
        "1 onion, blended",
        "2 garlic cloves",
        "1 tsp each: paprika, thyme, cumin",
        "Reduced-salt stock cube in 400ml water",
        "100g okra",
        "Large bowl of spinach or callaloo to serve",
        "1 tsp rapeseed oil"
      ],
      method: [
        "Season chicken with garlic, paprika, thyme — grill 25 minutes until cooked through",
        "Meanwhile make jollof base: fry blended onion in rapeseed oil 3 minutes",
        "Add tomatoes, pepper and spices, cook 10 minutes",
        "Add rice, stir to coat",
        "Add stock, bring to boil, cover and simmer 25 minutes",
        "Add okra for final 5 minutes",
        "Serve a FIST-SIZED portion of jollof alongside the full chicken breast",
        "Fill half the plate with steamed spinach or callaloo"
      ],
      tip: "The plate proportions are key for GD: ½ plate vegetables, ¼ plate protein, ¼ plate brown rice jollof. Monitor blood sugar 2 hours after to understand your personal response.",
      gdNote: "Portion size is the most important factor here. The NHS GD guide recommends no more than 2 heaped tablespoons of cooked rice per meal."
    }
  ]
};

export const getRecipesByTrimester = (trimester) => {
  const allRecipes = [
    ...PREGNANCY_RECIPES.trimester1,
    ...PREGNANCY_RECIPES.trimester2,
    ...PREGNANCY_RECIPES.trimester3,
    ...PREGNANCY_RECIPES.trimester4,
    ...PREGNANCY_RECIPES.gd
  ];
  return allRecipes.filter(r => r.trimester.includes(trimester));
};

export const getGDRecipes = () => PREGNANCY_RECIPES.gd;

export const getRecipesByTag = (tag) => {
  const allRecipes = [
    ...PREGNANCY_RECIPES.trimester1,
    ...PREGNANCY_RECIPES.trimester2,
    ...PREGNANCY_RECIPES.trimester3,
    ...PREGNANCY_RECIPES.trimester4,
    ...PREGNANCY_RECIPES.gd
  ];
  return allRecipes.filter(r => r.tags.includes(tag));
};

export const ALL_RECIPES = [
  ...PREGNANCY_RECIPES.trimester1,
  ...PREGNANCY_RECIPES.trimester2,
  ...PREGNANCY_RECIPES.trimester3,
  ...PREGNANCY_RECIPES.trimester4,
  ...PREGNANCY_RECIPES.gd
];
