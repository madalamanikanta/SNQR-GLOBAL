import { Hero } from '@/components/hero'
import { TrustedBy } from '@/components/trusted-by'
import { FeaturedResearch } from '@/components/featured-research'
import { SolutionsSection } from '@/components/solutions-section'
import { ProductsSection } from '@/components/products-section'

export default function Page() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <FeaturedResearch />
      <SolutionsSection />
      <ProductsSection />
    </>
  )
}
