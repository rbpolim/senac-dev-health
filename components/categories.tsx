import { ButtonCategory } from "@/components/button-category";

const CATEGORIES = [
  'SALADAS',
  'LEGUMES',
  'CARNES',
  'MASSAS',
  'SOPAS',
  'SOBREMESAS',
  'BEBIDAS',
]

type Props = {
  category: string
  onSelect: (item: string) => void
}

export function Categories({
  category,
  onSelect
}: Props) {
  return (
    <>
      <h4>Selecione uma categoria</h4>
      <div className='py-2 flex items-center gap-x-3 overflow-auto'>
        {CATEGORIES.map((item) => (
          <ButtonCategory
            key={item}
            title={item}
            onClick={() => onSelect(item)}
            isActive={item === category}
          />
        ))}
      </div>
    </>
  )
}