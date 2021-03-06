---
title: The difference between '==' and 'is'
date: '2017-01-01'
spoiler: == and is are totally different in python
---

For a beginner, the `is` operator may seem like as the `==` operator but actually, those are not same.

### Basic principle of object creation Computer Science

> An object can be a variable, a data structure, a function or a method
> when defined, new memory location is created and a value assigned to it.

So in the context of python, when a new variable, dict, list is defined, new memory location is created and a value is assigned to it.

Here is an example:

```python
    >>> a = 10
    >>> id(a)
    55211700

    >>> l = [1, "a", 5.5]
    >>> id(l)
    56335856
```

In above example `id` function is used to get memory location of the object, so it tells us that that each object has a different memory location.

we are going to use is `id` function for further explanations.

# Python '==' operator

> The `==` expression evaluates to `True` if the values in objects are similar.

Here is an example:

```python
    >>> names = ["casey", "amanda", "raju"]
    >>> names_copy = names # created another variable names_copy
```

In above example, we created names variable as a list of names and again created a new variable names_copy which points to names list.

Let's check the contents of the two variables

```python
    >>> names
    ["casey", "amanda", "raju"]

    >>> names_copy
    ["casey", "amanda", "raju"]
```

The contents of two lists are same, we will get the `True` when we compare with `==`

```python
    >>> names == names_copy
    True
```

# Python 'is' operator

The `==` expression does not tell us weather names and names_copy are pointing to same object or not.

Let us check the object memory location by using `id` function.

```python
    >>> id(names)
    56336176

    >>> id(names_copy)
    56336176
```

So we can conclude that the two variables `names` and `names_copy` are pointing to same object.

> An `is` operator evaluates to True if two variables point to the same object.

By the definition of `is` the `names` and `names_copy` should evaluate to True

```python
    >>> names is names_copy
    >>> True
```

Let us take another scenario when `names_copy` is not pointing to `names` object.

```python
    >>> names_copy = list(names)

    >>> names
    ["casey", "amanda", "raju"]

    >>> names_copy
    ["casey", "amanda", "raju"]
```

Here `list` creates an identical copy of `names` object.

```python
    >>> id(names)
    56336176

    >>> id(names_copy)
    56355656
```

As we can see the memory location of two objects are different.
Now we can check the results of `==` and `is` operators

```python
    >>> names == names_copy
    True

    >>> names is names_copy
    False
```

In first case we got the result `True` because the contents of two variables are same, but in second case the though, the contents are same the variables are pointing to two different memory locations, so the result us `False`.

# Corner Cases

> Because of the way the Python works, we can get unexpected and inconsistent
> results when we mistakenly use `is` to compare for reference equality on
> integers

Let us considet below example

```python
    >>> a = 500
    >>> b = 500

    >>> a == b
    True

    >>> a is b
    False
```

That is what what we expected, a and b have the same value, but are distinct memory locations.

```python
    >>> a = 200
    >>> b = 200

    >>> a == b
    True

    >>> a is b
    True
```

WHAT? why is that?, is python CRAZY!!!.

The reson for this wired behavior of Python is,

> The implementation of Python `caches` integer objects in the range -5 to 256
> as singleton instances for performance reasons.

# Conclusion

- Do not use `is` operator to compare integers.
- Use `==` to compare for equality.
- Comparisons to singletons like `None` should always be done with `is`, never use the `==` operators.
