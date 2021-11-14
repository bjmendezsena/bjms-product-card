# bjms-product-card

Este es un paquete de purebas para el despliegue en NPM

### Briaulin Mendez Sena

## Ejemplo

```
import  {ProductImage, ProductTitle, ProductButtons, ProductCard } from 'bjms-product-card';
```

```

<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {({ count, increaseBy, isMaxCountReached, reset, maxCount }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>
```
