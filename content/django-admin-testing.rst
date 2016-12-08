Django admin testing
====================

:date: 2016-11-13 23:16
:modified: 2016-12-13 23:16
:tags: django, python, testing
:category: Django
:slug: django-admin-testing
:authors: Anton Prokhorov
:summary: How to test custom admin actions

There is a some case where you have to write custom admin methods. For example it can be a custom admin object action or
custom field in list of objects. For example:

.. code-block::python

    def rules_count(self, obj):
        """Calculate count of ``rules``"""
        return obj.rules.count()


To test this you can write something like this:

.. code-block::python

    class TaskAdminTest(TestCase):
    """Test case for ``OneTimeTaskAdmin`` and ``PeriodicTaskAdmin`` classes"""

    def setUp(self):
        self.admin = OneTimeTaskAdmin(OneTimeTask, AdminSite())
        self.task = OneTimeTaskFactory(rules=[RuleFactory()],
                                       profiles=[ProfileFactory()])

    def test_rules_count(self):
        """Test ``rules_count`` admin method"""
        self.assertEqual(self.admin.rules_count(self.task),
                         self.task.rules.count())

