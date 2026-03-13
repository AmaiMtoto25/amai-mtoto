
/* eslint-disable */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { auth } from "../firebase/auth";
import { getUserById, db, updateDoc, doc } from "../firebase/firestore";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  VStack,
  HStack,
  Grid,
  GridItem,
  Spinner,
  Center,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

const milestones = {
  4: "Your baby is the size of a poppy seed! The neural tube is forming right now.",
  5: "A tiny heart has started beating. Your baby is about the size of a sesame seed.",
  6: "The baby face is beginning to form - tiny nostrils and the start of ears are appearing.",
  7: "Your baby hands and feet are forming as little paddles. They are about the size of a blueberry!",
  8: "All essential organs have begun to develop. Your baby moves, though you cannot feel it yet.",
  9: "Tiny toes are forming! Your baby is now about the size of a grape.",
  10: "Your baby can now swallow and produce urine. Tiny fingernails are starting to grow.",
  11: "Your baby is almost fully formed. Movements are becoming more distinct.",
  12: "You have reached the end of your first trimester! The risk of miscarriage drops significantly now.",
  13: "Your baby fingerprints are forming - completely unique to them!",
  14: "Your baby may be sucking their thumb. They can make facial expressions now.",
  15: "Your baby bones are getting stronger. You might start to feel fluttery movements soon.",
  16: "Your baby can hear sounds from outside the womb. Try talking or singing to them!",
  17: "Fat is beginning to form under your baby skin to keep them warm.",
  18: "Your baby ears are developed enough to hear your heartbeat.",
  19: "Your baby is covered in a white waxy coating called vernix that protects their skin.",
  20: "Halfway there! Your baby is about the size of a banana.",
  21: "Your baby can feel you moving and may respond to touch on your belly.",
  22: "Your baby grip is strong enough to hold a finger. Their face looks fully formed.",
  23: "Your baby lungs are developing rapidly. They practice breathing amniotic fluid.",
  24: "Your baby brain is growing fast. They respond to light and sound from outside.",
  25: "Your baby is gaining weight and filling out. They look more like a newborn every day.",
  26: "Eyes are opening for the first time! Your baby can blink and respond to light.",
  27: "You are entering the third trimester! Your baby sleeps and wakes in regular cycles.",
  28: "Your baby brain and lungs continue to mature. They can dream during REM sleep!",
  29: "Your baby is putting on about 200g per week now. Movements may feel stronger.",
  30: "Your baby brain and lungs continue to mature. They can dream during REM sleep!",
  31: "Your baby can turn their head and may respond to your voice with movement.",
  32: "Your baby is practicing breathing movements 30-40% of the time now.",
  33: "Your baby immune system is developing. They are getting antibodies from you.",
  34: "Your baby lungs are nearly fully developed. If born now they would likely do very well.",
  35: "Your baby is running out of room but still moving. Their skull stays soft for birth.",
  36: "Your baby is considered early term. Most organs are fully developed.",
  37: "Your baby is full term! They could arrive any day now.",
  38: "Your baby is shedding the waxy vernix coating. They are getting ready to meet you!",
  39: "Your baby brain and lungs are fully mature. Your body is preparing for labour.",
  40: "Your due date is here! Every baby comes in their own time. You are doing amazingly.",
  41: "Your baby will arrive very soon. Rest, stay hydrated, and trust your body.",
  42: "Your care team is watching over you both. Baby is coming soon - you have got this!",
};

function getWeeksPregnant(dueDateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDateStr);
  due.setHours(0, 0, 0, 0);
  const conception = new Date(due.getTime() - 280 * 86400000);
  const daysPregnant = Math.floor((today - conception) / 86400000);
  return Math.max(0, Math.floor(daysPregnant / 7));
}

function getDaysUntilDue(dueDateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDateStr);
  due.setHours(0, 0, 0, 0);
  return Math.ceil((due - today) / 86400000);
}

function getTrimester(weeks) {
  if (weeks <= 13) return "First Trimester";
  if (weeks <= 26) return "Second Trimester";
  return "Third Trimester";
}

function getProgress(weeks) {
  return Math.min(100, Math.round((weeks / 40) * 100));
}

function getMilestone(weeks) {
  const key = Math.min(42, Math.max(4, weeks));
  return milestones[key] || "Your baby is growing beautifully. Every week is a miracle!";
}

function formatDueDate(dueDateStr) {
  return new Date(dueDateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dueDateInput, setDueDateInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (!firebaseUser) {
        router.push("/log-in");
        return;
      }
      setUser(firebaseUser);
      const data = await getUserById(firebaseUser.uid);
      setUserData(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  async function handleSave() {
    if (!dueDateInput) {
      setError("Please enter your due date.");
      return;
    }
    setError("");
    setSaving(true);
    try {
      await updateDoc(doc(db, "users", user.uid), {
        dueDate: dueDateInput,
        location: locationInput,
      });
      setUserData((prev) => ({
        ...prev,
        dueDate: dueDateInput,
        location: locationInput,
      }));
    } catch (e) {
      setError("Something went wrong saving your details. Please try again.");
    }
    setSaving(false);
  }

  if (loading) {
    return (
      <Layout>
        <Center h="60vh">
          <Spinner size="xl" color="pink.400" />
        </Center>
      </Layout>
    );
  }

  const hasDueDate = userData?.dueDate;

  if (!hasDueDate) {
    return (
      <Layout>
        <Box maxW="460px" w="100%" bg="white" borderRadius="2xl" p={8} boxShadow="md" mt={10}>
          <Heading as="h2" fontSize="2xl" mb={2} color="pink.700">
            Welcome, Mama
          </Heading>
          <Text color="gray.500" fontSize="sm" mb={8}>
            Let us personalise your experience. Enter your details once and
            we will track your journey every time you log in.
          </Text>
          <VStack spacing={5} align="stretch">
            <FormControl>
              <FormLabel fontSize="sm" color="gray.500" fontWeight="600">
                YOUR DUE DATE
              </FormLabel>
              <Input
                type="date"
                value={dueDateInput}
                onChange={(e) => setDueDateInput(e.target.value)}
                borderRadius="xl"
                borderColor="orange.200"
                _focus={{ borderColor: "orange.400", boxShadow: "none" }}
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="sm" color="gray.500" fontWeight="600">
                YOUR TOWN OR CITY
              </FormLabel>
              <Input
                type="text"
                placeholder="e.g. Nairobi, Lagos, London"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                borderRadius="xl"
                borderColor="orange.200"
                _focus={{ borderColor: "orange.400", boxShadow: "none" }}
                size="lg"
              />
            </FormControl>
            {error && <Text color="red.500" fontSize="sm">{error}</Text>}
            <Button
              onClick={handleSave}
              isLoading={saving}
              loadingText="Saving"
              bg="orange.400"
              color="white"
              size="lg"
              borderRadius="xl"
              _hover={{ bg: "orange.500" }}
            >
              Start My Journey
            </Button>
          </VStack>
        </Box>
      </Layout>
    );
  }

  const weeks = getWeeksPregnant(userData.dueDate);
  const days = getDaysUntilDue(userData.dueDate);
  const progress = getProgress(weeks);
  const trimester = getTrimester(weeks);
  const milestone = getMilestone(weeks);
  const mapsQuery = encodeURIComponent("maternity hospital near " + (userData.location || "my location"));

  return (
    <Layout>
      <Box maxW="480px" w="100%" mt={8} pb={16}>
        <Heading as="h2" fontSize="xl" color="pink.700" mb={1}>
          Hello, {userData.username || "Mama"}
        </Heading>
        <Text fontSize="sm" color="gray.400" mb={6}>
          {new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
        </Text>
        <Box bg="linear-gradient(135deg, #C4622D 0%, #8B4513 100%)" borderRadius="2xl" p={8} color="white" mb={4}>
          <Text fontSize="xs" letterSpacing="widest" opacity={0.8} mb={1}>YOU ARE</Text>
          <Heading fontSize="6xl" lineHeight="1" mb={1}>{weeks}</Heading>
          <Text fontSize="lg" opacity={0.85} fontWeight="300">weeks pregnant</Text>
          <Box display="inline-block" bg="whiteAlpha.200" border="1px solid" borderColor="whiteAlpha.300" borderRadius="full" px={4} py={1} fontSize="sm" mt={4} mb={6}>
            {trimester}
          </Box>
          <Box>
            <HStack justify="space-between" fontSize="xs" opacity={0.75} mb={2}>
              <Text>Conception</Text>
              <Text>{progress}%</Text>
              <Text>Due Date</Text>
            </HStack>
            <Box bg="whiteAlpha.300" borderRadius="full" h="6px">
              <Box bg="white" borderRadius="full" h="6px" w={progress + "%"} />
            </Box>
          </Box>
        </Box>
        <Grid templateColumns="1fr 1fr" gap={3} mb={4}>
          <GridItem bg="white" borderRadius="2xl" p={5} boxShadow="sm">
            <Text fontSize="2xl" mb={2}>📅</Text>
            <Text fontSize="xs" color="gray.400" fontWeight="600" textTransform="uppercase">Days to go</Text>
            <Heading fontSize="2xl" color="gray.700">{days > 0 ? days : "Any day!"}</Heading>
            <Text fontSize="xs" color="gray.400">until due date</Text>
          </GridItem>
          <GridItem bg="white" borderRadius="2xl" p={5} boxShadow="sm">
            <Text fontSize="2xl" mb={2}>🌙</Text>
            <Text fontSize="xs" color="gray.400" fontWeight="600" textTransform="uppercase">Due date</Text>
            <Heading fontSize="lg" color="gray.700">{formatDueDate(userData.dueDate)}</Heading>
          </GridItem>
        </Grid>
        <Box bg="white" borderRadius="2xl" p={6} boxShadow="sm" mb={4} borderLeft="4px solid" borderColor="orange.300">
          <HStack mb={3}>
            <Box bg="orange.400" borderRadius="lg" w="36px" h="36px" display="flex" alignItems="center" justifyContent="center" fontSize="lg">✨</Box>
            <Heading fontSize="md" color="gray.700">This week</Heading>
          </HStack>
          <Text fontSize="sm" color="gray.600" lineHeight="1.7">{milestone}</Text>
        </Box>
        <Box bg="white" borderRadius="2xl" p={6} boxShadow="sm" mb={4}>
          <Heading fontSize="md" color="gray.700" mb={1}>Nearby Maternity Care</Heading>
          <Text fontSize="sm" color="gray.400" mb={4}>
            Based on your location: <Box as="span" fontWeight="600" color="gray.600">{userData.location || "not set"}</Box>
          </Text>
          <Button
            as="a"
            href={"https://www.google.com/maps/search/" + mapsQuery}
            target="_blank"
            rel="noopener noreferrer"
            w="100%"
            bg="orange.50"
            color="orange.500"
            borderRadius="xl"
            _hover={{ bg: "orange.100" }}
            fontWeight="500"
          >
            Find Maternity Hospitals Near Me
          </Button>
        </Box>
        <Text fontSize="sm" color="gray.400" textAlign="center">
          Wrong details?{" "}
          <Box as="span" color="orange.400" cursor="pointer" textDecoration="underline"
            onClick={async () => {
              await updateDoc(doc(db, "users", user.uid), { dueDate: "", location: "" });
              setUserData((prev) => ({ ...prev, dueDate: "", location: "" }));
            }}>
            Update your information
          </Box>
        </Text>
      </Box>
    </Layout>
  );
}
