@ operator in python 3.5
########################

:date: 2016-12-17 22:42:25
:modified: 2016-12-17 22:42:25
:tags: python, syntax sugar, operators
:category: Python
:slug: @_operator_in_python_3.5
:authors: Anton Prokhorov

Today I learned there is an operator "@" in python 3.5. If you just type 5 @ 5 in python REPL, you will see the next
message

::

    ---------------------------------------------------------------------------
    TypeError                                 Traceback (most recent call last)
    <ipython-input-1-c59396881bea> in <module>()
    ----> 1 5 @ 5

    TypeError: unsupported operand type(s) for @: 'int' and 'int'


New python syntax supports @ operator, however there are no built-in types which can be operands of this operators.

But numpy is.

There is a little example below:

.. code-block:: python

    import numpy as np

    X = np.array([[1, 2, 3],
                  [1, 2, 3],
                  [1, 2, 3]])
    X @ X

There is a very weird behaviour of pygments, it suggests "@" operator is a mistake, but don't care.
As you might guess, @ is a matrix multiplication operator. However I suggest, that this is not the only thing for what
this operator can be used.

.. PELICAN_END_SUMMARY

To implement behaviour of operand of "@" we need to define a class with ``__matmul__``, ``__rmatmul__`` and
``__imatmul__`` magic methods. There is a little example below:

.. code-block:: python

    class A:
        value = None

        def __init__(self, value):
            self.value = value

        def __matmul__(self, other):
            return self.value * other.value

        def __imatmul__(self, other):
            return self.value * other.value

        def __rmatmul__(self, other):
            return self.value / other.value

        def __repr__(self):
            return 'A <{value}>'.format(value=self.value)

        def __str__(self, *args, **kwargs):
            return str(self.value)

    if __name__ == '__main__':
        print(A(5) @ A(5))
        a = A(5)
        print(a)
        a @= A(5)
        print(a)

Code above will produce following out:

::

    25
    5
    25

Could suggest of a bunch of applications of "@" operator (compositions, transforms etc.), I suggest it shouldn't be
restricted only by matrix multiplications.

Happy coding :)
