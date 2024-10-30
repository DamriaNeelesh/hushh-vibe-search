import React from 'react';
import { Box, Heading, Text, Avatar, Flex, Link, Container } from '@chakra-ui/react';

const BlogDetailPage = () => {
  return (
    <Container gap={{md:'0.5rem'}} display={'flex'} flexDirection={'column'} p={5} minW={{md:'70%',base:'100%'}} fontFamily={'Figtree, sans-serif'}>
      <Text fontSize={{md:'13px',base:'11px'}} lineHeight={'25px'} fontWeight={'700'} color="#FFB6C1" mb="2">MACHINE LEARNING</Text>
      <Text color={'#000000'} fontWeight={'500'} fontSize={{md:'3rem',base:'1.5rem'}} lineHeight={{md:'60px',base:'40px'}}>Enhancing Customer Satisfaction: Controlling and Tailoring Semantic Search Results With Semantic Parsing</Text>
      <Text fontSize={{md:'1rem',base:'0.5rem'}} color={'#5F6367'} fontWeight={'500'} lineHeight={{md:'34px',base:'30px'}}>23 Oct, 2024 · 10 min read</Text>
      <Flex align="center" mb="6">
        <Avatar name="Rohan Nishikant Sidankar" src="/path/to/avatar.jpg" />
        <Box ml="3" fontSize={{md:'1rem',base:'0.5rem'}} lineHeight={'24px'}>
          <Text fontWeight="700">Rohan Nishikant Sidankar</Text>
          <Text fontWeight={'500'}>ML Engineer, Hushh.ai</Text>
        </Box>
      </Flex>
      <Text mb="4" color={'#5F6367'} fontWeight={'500'} fontSize={{md:'2rem',base:'1rem'}} lineHeight={'28px'}>The Power of Semantic Search for E-commerce</Text>
      <Text mb="4" color={'#5F6367'}>
        In the competitive world of e-commerce, customer satisfaction reigns supreme. A key driver of satisfaction? A seamless and intuitive search experience. This is where semantic search comes in, moving beyond simple keyword matching to understand the true intent behind a user's query. Unlike traditional keyword-based search, semantic search delves into the meaning and context of words, delivering highly relevant results that resonate with customer needs.
      </Text>
      <Heading as="h3" size="md" mb="4">What is Semantic Search?</Heading>
      <Text mb="4">
        The Challenge: Beyond Traditional Search to Understanding Queries
        Traditional keyword-based search often falls short when faced with complex user queries. Imagine a customer searching for a "red dress for a winter wedding with floral prints." A keyword-based approach might return results containing all those words, but not necessarily in a way that reflects the user's true intent. This is where Query Understanding becomes crucial. Search engines need to go beyond simply identifying keywords to grasp the nuances of human language and decipher the relationships between those words.
      </Text>
      <Text mb="4">
        Search engines are increasingly utilizing NLP query understanding and large language models (LLMs) for query understanding to decipher the nuances of natural language. However, there's a catch. Semantic search, while powerful, can feel like a "black box." We feed in a query and get relevant results, but the inner workings – often reliant on LLMs or even vision transformers (ViTs) for generating vector representations – remain opaque. This lack of control can be a challenge.
      </Text>
      <Text mb="4">
        For example, while LLMs and ViTs excel at generating embeddings for queries and catalog items, understanding which vector features correspond to "red t-shirt" versus "white floral prints" and how they influence ranking is unclear. This lack of transparency can introduce noise into the system, impacting the precision of search results.
      </Text>
      <Heading as="h3" size="md" mb="4">Semantic Parsing: Unlocking Deeper Query Understanding</Heading>
      <Text mb="4">
        What is Semantic Parsing?
        This is where Semantic Parsing comes in, offering a way to crack open the "black box" of semantic search. Semantic parsing breaks down natural language queries into their fundamental components, identifying entities, attributes, and relationships. Think of it as teaching a search engine to diagram a sentence, understanding that "red" is an attribute of the "t-shirt" entity.
      </Text>
      <Text mb="4">
        (For example, a semantic parser can understand that "red" refers to the color of the dress, "winter wedding" indicates the occasion, and "floral prints" specifies a design element.)
      </Text>
      <Link href="https://towardsdatascience.com/understanding-frame-semantic-parsing-in-nlp-bec84c885061" color="blue.500" isExternal>
        Learn more about semantic parsing
      </Link>
      <Text mb="4">
        While a deep dive into neural semantic parsing and deep learning semantic parsing deserves its own discussion, the key takeaway is this: Semantic parsing allows us to move from basic keyword recognition to a nuanced understanding of user intent.
      </Text>
      <Text mb="4">
        To understand better, let us simplify the process by focusing only on specific aspects of the input. Understanding the complete meaning or logical forms is not necessary. Here is an example.
      </Text>
      <Heading as="h3" size="md" mb="4">Vanilla Semantic Search</Heading>
      <Text mb="4">
        Imagine someone searches for: "red dress with floral prints for a winter wedding"
        They want three main things:
        A red dress
        Floral patterns
        Something warm enough for a winter wedding
      </Text>
      <Text mb="4">
        The current approach is pretty straightforward:
        We take the search words and turn them into a special format (called a vector) that computers understand
        Our system looks for similar items in our product catalog
        We apply some business rules to pick the top 20-30 best matches
        This usually works well! The results are mostly relevant - we get dresses that could work for our shopper.
      </Text>
      <Heading as="h3" size="md" mb="4">Semantic Search using Query Parsing</Heading>
      <Text mb="4">
        E-commerce search requires more than just matching keywords. We need to understand user intent, prioritize features, and deliver precisely ranked results.
      </Text>
      <Heading as="h3" size="md" mb="4">Core Concept: Query Parsing</Heading>
      <Text mb="4">
        The fundamental idea is to dissect search queries into distinct components that we can analyze independently. Instead of treating a search query as one block of text, we break it down into meaningful pieces that our system can understand and prioritize.
      </Text>
      <Heading as="h3" size="md" mb="4">Architecture Overview</Heading>
      <Text mb="4">
        Here's how our enhanced search system works:
        Dual Processing Pipeline
        Traditional semantic search path
        New query parsing path for detailed analysis
        Semantic Parser Integration
        Breaks queries into logical components
        Creates labeled sequences for specific features
        Generates targeted embeddings for precise matching
      </Text>
      <Heading as="h3" size="md" mb="4">Building the Parser: Key Requirements</Heading>
      <Text mb="4">
        Speed is crucial - we need results in milliseconds, not seconds. This rules out using Large Language Models (LLMs) directly in the processing pipeline, as they typically add 7-10 seconds of latency.
      </Text>
      <Heading as="h3" size="md" mb="4">Implementation Steps</Heading>
      <Text mb="4">
        Building a semantic query parser for your e-commerce platform might seem daunting, but it doesn't have to be. Here's a practical breakdown:
      </Text>
      <Text mb="4">
        1. Feature Classification System: Define a structured taxonomy for your domain. For an e-commerce fashion site:
        - Color (red, blue, black)
        - Season (winter, summer)
        - Occasion (wedding, business)
        - Product Type (dress, pants)
        - Specifications (floral print, v-neck)
      </Text>
      <Text mb="4">
        2. Knowledge Base Development: Begin by creating a comprehensive inventory of terms, phrases, synonyms, and slang relevant to your industry. This knowledge base serves as the foundation for your parser.
        Initially, the corpus may not cover all terms comprehensively. Implement a pipeline of cron jobs to process new queries periodically through an LLM, enhancing the corpus over time. This architecture allows the corpus to improve continually.
      </Text>
      <Text mb="4">
        3. Phrase Matching Algorithm: Implement a phrase matching algorithm to identify chunks of phrases, trigrams, bigrams, and monograms present in the feature corpus. Prioritize the longest chunk label; for instance, phrases like 'beach party' should be categorized together under 'occasion' rather than as separate entities.
        Example: "beach party" → occasion (single category)
        Rather than: "beach" + "party" → two separate terms
      </Text>
      <Text mb="4">
        4. Grammar and Syntax Understanding: Define grammatical rules to help your parser interpret relationships between words. For instance, "long sleeves" should be categorized as a single specification related to the sleeve length. For instance, rules could specify that adjectives after specifications (like 'long sleeves') should be classified as part of the specification, with 'sleeves' as the entity and 'long' as a requirement.
        This provides a robust foundation for a version 1.0 semantic parser. The system can be enhanced with additional NLP techniques as your needs grow.
      </Text>
      <Text mb="4">
        Here you can see the result of semantic parsing for our example query:
      </Text>
      <Heading as="h3" size="md" mb="4">Optimizing Search Results: The Final Steps</Heading>
      <Text mb="4">
        The true power of semantic parsing for e-commerce lies in its ability to fine-tune search results for optimal relevance. By breaking down queries into their constituent parts, we can implement sophisticated ranking systems that go beyond simple keyword matching.
      </Text>
      <Text mb="4">
        We start with traditional semantic search using the complete query. Think of this as casting a wide net to catch all potentially relevant products. This gives us our initial pool of candidates.
      </Text>
      <Text mb="4">
        Not all search features are created equal. We need to make strategic decisions about how to use each identified feature:
        Filtering Criteria
        Some features act as hard requirements. For example:
        Brand names typically need exact matches
        Size specifications must be precise
        Price range requirements are non-negotiable
        Boosting Factors
        Other features influence ranking without excluding products:
        Color preferences
        Style elements
        Seasonal appropriateness
      </Text>
      <Text mb="4">
        The Ranking Engine
        Here's where it gets interesting. We convert each feature chunk into its own embedding (a mathematical representation). This allows us to:
        Compare products against specific features
        Generate individual ranking scores
        Combine these scores intelligently
      </Text>
      <Text mb="4">
        Bringing It All Together
        The final step is rank fusion - combining multiple ranking signals into a single, coherent list. We can:
        Assign different weights to different features
        Account for user preferences
        Adapt to business priorities
        This creates a flexible system that can be tuned for:
        Individual user preferences
        Business objectives
        Seasonal priorities
        Market trends
        By balancing these elements, we create search results that are both relevant and aligned with business goals.
      </Text>
      <Text mb="4">
        Product Ranking: Semantic parsing allows us to rank products based on how well they align with the specific elements of a user's query.
        Query Parsing: By identifying key attributes within a query (e.g., color, size, occasion), we can surface products that precisely match those criteria.
        Rank Boosting: Weights assigned to different features empower you to boost the visibility of products that align with the most important aspects of a query.
        Techniques like the Rank Fusion Algorithm further refine this process, ensuring that the final product ranking reflects a balanced consideration of all relevant factors.
      </Text>
      <Heading as="h3" size="md" mb="4">Fine-Tuning Search Results: The Magic of Feature Weighting</Heading>
      <Text mb="4">
        The Power of Precision Control
        By breaking down queries into logical features and controlling their importance, we can fine-tune search results with surgical precision. Let's see this in action with some real examples.
      </Text>
      <Text mb="4">
        Experiment: Adjusting Feature Weights
        Test 1: Color Takes the Lead
        When we amplified the importance of color in our search:
        Nearly all results were red items
        Only 4-5 out of 18 products had floral prints
        Perfect for shoppers who prioritize getting the right shade
      </Text>
      <Text mb="4">
        Test 2: Patterns in Focus
        Shifting priority to floral patterns changed everything:
        Floral prints dominated the results
        Color became secondary
        Some non-red items appeared, but with beautiful floral designs
      </Text>
      <Text mb="4">
        Test 3: Occasion-Driven Results
        When we emphasized "wedding" as the key factor:
        Formal and wedding-appropriate dresses rose to the top
        Color and pattern became less crucial
        Results focused on elegance and event suitability
      </Text>
      <Text mb="4">
        Pro Tip: Balancing Act
        ✨ Here's the secret sauce: Always assign the highest weightage to full query semantic search. Think of it as your safety net - it understands the complete context. Use your parsed features to enhance and refine these results, not replace them.
      </Text>
      <Heading as="h3" size="md" mb="4">Tailor Semantic Search to Customer Needs: Enhance Satisfaction</Heading>
      <Text mb="4">
        Ultimately, the goal of any e-commerce search system is to satisfy the customer. Semantic parsing provides the tools to tailor the search experience to individual needs, leading to:
        Increased Engagement: Customers are more likely to engage with search results that accurately reflect their intent.
        Higher Conversions: When customers find what they are looking for quickly and easily, conversions naturally follow.
        Enhanced Satisfaction: A seamless and intuitive search experience fosters customer loyalty and positive brand perception.
      </Text>
      <Heading as="h3" size="md" mb="4">Conclusion</Heading>
      <Text mb="4">
        What we've explored here is more than just a technical improvement - it's a fundamental shift in how we approach semantic search. By introducing query parsing, we've essentially installed a glass window into what was once an opaque system.
      </Text>
      <Text mb="4">
        Key Takeaways
        We've uncovered how to:
        Break down complex search queries into meaningful components
        Take control of the search process with precision
        Balance different features to deliver exactly what users want
        Transform rigid search systems into flexible, intelligent tools
      </Text>
      <Text mb="4">
        The Real Impact
        The beauty of this approach lies in its adaptability. Whether a shopper is color-obsessed, pattern-particular, or occasion-focused, our system can now adjust to their priorities. This isn't just about better search results - it's about creating happier, more satisfied customers who find exactly what they're looking for.
      </Text>
      <Text mb="4">
        This is just the beginning. As we continue to refine these techniques, we're moving closer to search systems that truly understand not just what people are searching for, but why they're searching for it. It's a step toward more intuitive, human-centric e-commerce experiences.
      </Text>
      <Text mb="4">
        Remember: The best search isn't just about finding products - it's about understanding people.
      </Text>
    </Container>
  );
};

export default BlogDetailPage;